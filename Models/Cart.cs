using System.Collections.Generic;

namespace friday_test.Models
{
  public class Cart
  {
    public int Id { get; set; }
    public int? FlowerId { get; set; }

    public Flower flower { get; set; }
  }
}