using System;
using System.Collections.Generic;
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

      if (!exists)
      {
        // create a new cart
        var cart = new Cart();
        // set the FK of the cartitem to the new cart
        cart.CartItems.Add(cartItem);
        // save the cartItem
        await _context.Carts.AddAsync(cart);
        await _context.SaveChangesAsync();

        // return new Cart
        return cart;
      }
      else
      {
        var cart = await _context.Carts.FirstOrDefaultAsync(f => f.CartNumber == newItem.CartNumber);
        cart.CartItems.Add(cartItem);
        // save the cartItem
        await _context.SaveChangesAsync();

        // return new Cart
        return cart;
      }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Cart>>> GetCart()
    {
      return await _context.Carts.ToListAsync();
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
    public async Task<ActionResult<Flower>> DeleteCartItem(int cartItemId)
    {
      var item = await _context.CartItem.FirstOrDefaultAsync(f => f.Id == cartItemId);
      if (item == null)
      {
        return NotFound(new { cartItemId });
      }

      _context.CartItem.Remove(item);
      await _context.SaveChangesAsync();

      return Ok("Item has been removed");
    }
  }
}