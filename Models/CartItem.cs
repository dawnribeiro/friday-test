namespace friday_test.Models
{
  public class CartItem
  {
    public int Id { get; set; }

    public int CartId { get; set; }
    public Cart Cart { get; set; }
    public int? FlowerId { get; set; }
    public Flower Flower { get; set; }



  }
}