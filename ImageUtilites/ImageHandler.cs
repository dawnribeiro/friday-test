// using System.IO;
// using System.Threading.Tasks;
// using friday_test.Interfaces;
// using Microsoft.AspNetCore.Http;

// namespace friday_test.ImageUtilities
// {
//   public class ImageHandler : IImageHandler
//   {
//     private readonly IImageWriter _imageWriter;
//     public ImageHandler(IImageWriter imageWriter)
//     {
//       _imageWriter = imageWriter;
//     }

//     public async Task DeleteFile(string path)
//     {
//       File.Delete(path);
//     }

//     public async Task<string> UploadImage(IFormFile file)
//     {
//       var result = await _imageWriter.UploadImage(file);
//       return result;
//     }
//   }
// }