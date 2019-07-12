using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using friday_test.Models;
using friday_test.ViewModel;
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
    public async Task<ActionResult<Cart>> CreateCart(NewCartItem newItem)
    {
      var cartItem = new CartItem
      {
        FlowerId = newItem.FlowerId
      };
      var exists = await _context.Carts.AnyAsync(a => a.CartNumber == newItem.CartNumber);
      if (exists)
      {
        var cart = await _context.Carts.FirstOrDefaultAsync(f => f.CartNumber == newItem.CartNumber);
        cart.CartItems.Add(cartItem);
        var flower = await _context.Flowers.FirstOrDefaultAsync(f => f.Id == cartItem.FlowerId);
        flower.NumberInStock--;
        await _context.SaveChangesAsync();
        return cart;
      }
      else
      {
        var cart = new Cart();
        cart.CartItems.Add(cartItem);
        var flower = await _context.Flowers.FirstOrDefaultAsync(f => f.Id == cartItem.FlowerId);
        flower.NumberInStock--;
        await _context.Carts.AddAsync(cart);
        await _context.SaveChangesAsync();
        return cart;
      }
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cart>>> GetCart()
    {
      return await _context.Carts.Include(i => i.CartItems).ThenInclude(i => i.Flower).ToListAsync();
    }

    [HttpGet("cartNumber/{cartNumber}")]
    public async Task<ActionResult<Cart>> GetCartNumber(Guid cartNumber)
    {
      var cart = await _context.Carts.Include(i => i.CartItems).ThenInclude(i => i.Flower).FirstOrDefaultAsync(f => f.CartNumber == cartNumber);

      if (cart == null)
      {
        return NotFound();
      }

      return cart;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Cart>> GetCartById(int id)
    {
      var cart = await _context.Carts.Include(i => i.CartItems).FirstOrDefaultAsync(f => f.Id == id);

      if (cart == null)
      {
        return NotFound();
      }

      return cart;
    }

    [HttpDelete("{cartItemId}")]
    public async Task<ActionResult<Flower>> RemoveCartItem(int cartItemId)
    {
      var item = await _context.CartItem.FirstOrDefaultAsync(f => f.Id == cartItemId);
      if (item == null)
      {
        return NotFound(new { cartItemId });
      }


      _context.CartItem.Remove(item);
      var addFlower = await _context.Flowers.FirstOrDefaultAsync(f => f.Id == item.FlowerId);
      addFlower.NumberInStock++;
      await _context.SaveChangesAsync();

      return Ok();
    }



    // [HttpPatch("{flowerId}")]
    // public async Task<IActionResult> UpdateFlower(int flowerId, )
    // {
    //   if (flowerId != flowerId)
    //   {
    //     return BadRequest();
    //   }

    //   _context.Entry(flowerId).State = EntityState.Modified;

    //   try
    //   {
    //     await _context.SaveChangesAsync();
    //   }
    //   catch (DbUpdateConcurrencyException)
    //   {
    //     if (!FlowerExists(flowerId))
    //     {
    //       return NotFound();
    //     }
    //     else
    //     {
    //       throw;
    //     }
    //   }

    //   return NoContent();
    // }
    // private bool FlowerExists(int flowerId)
    // {
    //   return _context.CartItem.Any(e => e.flowerId == flowerId);
    // }
  }
}