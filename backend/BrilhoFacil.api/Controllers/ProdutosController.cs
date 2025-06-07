using Microsoft.AspNetCore.Mvc;

namespace BrilhoFacilApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProdutos()
        {
            var produtos = new[]
            {
                new { Id = 1, Nome = "Colar Elena", Preco = 99.90, Imagem = "images/colar1.png" },
                new { Id = 2, Nome = "Brinco Dara", Preco = 59.90, Imagem = "images/brinco1.png" },
                new { Id = 3, Nome = "Colar Dalila", Preco = 79.90, Imagem = "images/colar2.png" }
            };

            return Ok(produtos);
        }
    }
}