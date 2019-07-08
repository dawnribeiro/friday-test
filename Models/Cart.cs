using System;
using System.Collections.Generic;

namespace friday_test.Models
{
  public class Cart
  {
    public int Id { get; set; }

    public Guid CartNumber { get; set; } = Guid.NewGuid();
    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<CartItem> CartItems { get; set; } = new List<CartItem>();

  }
}