using System.Collections.Generic;

namespace friday_test.Models
{
  public class Flower
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int NumberInStock { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string Url { get; set; }
    public string Color { get; set; }
    public List<Cart> Carts { get; set; } = new List<Cart>();
  }
}