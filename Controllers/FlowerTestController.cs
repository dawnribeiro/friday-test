using System.Threading.Tasks;
using friday_test.Models;
using Microsoft.AspNetCore.Mvc;

namespace friday_test.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FlowerTestController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public FlowerTestController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<Flower>> PostFlower(Flower flower)
    {
      _context.Flowers.Add(flower);
      await _context.SaveChangesAsync();

      return flower;
    }

  }
}