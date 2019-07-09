using System;

namespace friday_test.Models
{
  public class Image

  {
    public int Id { get; set; }
    public string Url { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
  }
}
