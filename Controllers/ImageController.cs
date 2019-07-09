using System;
using System.Threading.Tasks;
using friday_test.ImageUtilities;
using friday_test.Models;
using imagetest1.ImageUtilities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace friday_test.Controllers
{
  [Route("api/[controller]")]
  public class ImageController : Controller

  {
    private readonly DatabaseContext _context;
    private readonly IImageHandler _imageHandler;
    private readonly IOptions<CloudinaryKeys> _options;

    public ImageController(DatabaseContext context, IImageHandler imageHandler, IOptions<CloudinaryKeys> options)
    {
      _imageHandler = imageHandler;
      _options = options;
      _context = context;
      Console.WriteLine(_options.Value.CloudName);

    }

    /// <summary>
    /// Uplaods an image to the server.
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [HttpPost]
    public async Task<ActionResult> UploadImage(IFormFile file)
    {

      var path = await _imageHandler.UploadImage(file);
      var rv = new CloudinaryStorage(_options.Value).UploadFile(path);

      var image = new Image
      {
        Url = rv.SecureUri.AbsoluteUri
      };
      // this._context.Images.Add(image);
      // await this._context.SaveChangesAsync();

      await _imageHandler.DeleteFile(path);

      return Ok(new { path, image });
    }

  }
}
