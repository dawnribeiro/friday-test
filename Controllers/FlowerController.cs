using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using friday_test;
using friday_test.Models;
using friday_test.ViewModel;

namespace sdg_react_template.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FlowerController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public FlowerController(DatabaseContext context)
    {
      _context = context;
    }


    // GET: api/Flower
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Flower>>> GetFlowers()
    {
      return await _context.Flowers.OrderBy(o => o.Name).ToListAsync();
    }

    [HttpGet("types")]
    public async Task<ActionResult<List<string>>> GetDistinctFlowersTypes()
    {
      var typesOfFlowers = _context.Flowers.Select(f => f.Name).Distinct();
      return await typesOfFlowers.ToListAsync();
    }

    [HttpGet("name/{Name}")]
    public async Task<ActionResult<List<Flower>>> GetFlowersByName([FromRoute]string Name)
    {
      var flowerName = _context.Flowers.Where(w => w.Name == Name).OrderBy(o => o.Name);
      return await flowerName.ToListAsync();
    }



    // GET: api/Flower/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Flower>> GetFlower(int id)
    {
      var flower = await _context.Flowers.FindAsync(id);

      if (flower == null)
      {
        return NotFound();
      }

      return flower;
    }



    // PUT: api/Flower/5
    [HttpPatch("{id}")]
    public async Task<IActionResult> UpdateFlower([FromRoute] int id, [FromBody] InventoryAdjustment adjustment)
    {
      var updatedFlower = await _context.Flowers.FirstOrDefaultAsync(f => f.Id == id);

      if (updatedFlower == null)
      {
        return NotFound();
      }
      else
      {
        updatedFlower.NumberInStock = updatedFlower.NumberInStock + adjustment.ValueToAdd;
      }

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!FlowerExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return Ok(updatedFlower);
    }

    // POST: api/Flower
    [HttpPost]
    public async Task<ActionResult<Flower>> PostFlower(Flower flower)
    {
      _context.Flowers.Add(flower);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetFlower", new { id = flower.Id }, flower);
    }

    // DELETE: api/Flower/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Flower>> DeleteFlower(int id)
    {
      var flower = await _context.Flowers.FindAsync(id);
      if (flower == null)
      {
        return NotFound();
      }

      _context.Flowers.Remove(flower);
      await _context.SaveChangesAsync();

      return flower;
    }

    private bool FlowerExists(int id)
    {
      return _context.Flowers.Any(e => e.Id == id);
    }
  }
}
