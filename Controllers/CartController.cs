using System.Collections.Generic;
using System.Threading.Tasks;
using friday_test.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace friday_test.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CartController : ControllerBase
  {

    private readonly DatabaseContext _context;

    public CartController(DatabaseContext context)
    {
      _context = context;
    }
    [HttpPost]
    public async Task<ActionResult<Cart>> AddItemToCart(Cart cart)
    {
      _context.Carts.Add(cart);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCart", new { id = cart.Id }, cart);
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cart>>> GetCart()
    {
      return await _context.Carts.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Cart>> GetSpecificCart(int id)
    {
      var cart = await _context.Carts.FindAsync(id);

      if (cart == null)
      {
        return NotFound();
      }

      return cart;
    }
  }
}