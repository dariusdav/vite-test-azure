using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SteamController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;

    public SteamController(IConfiguration configuration, IHttpClientFactory httpClientFactory)
    {
        _configuration = configuration;
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet("games/{steamId}")]
    public async Task<IActionResult> GetOwnedGames(string steamId)
    {
        var steamApiKey = _configuration["Steam:ApiKey"];
        var client = _httpClientFactory.CreateClient("Steam");
        // Now you can use the client to make HTTP requests to Steam API
        // Example: await client.GetAsync($"IPlayerService/GetOwnedGames/v1/?key={steamApiKey}&steamid={steamId}");
        var response = await client.GetAsync($"IPlayerService/GetOwnedGames/v1/?key={steamApiKey}&steamid={steamId}");
        var content = await response.Content.ReadAsStringAsync();
        return Ok(content);
    }
} 