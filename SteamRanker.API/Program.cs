var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.MapGet("api/steam/games/{steamId}", (string steamId) =>
{   
    if (app.Environment.IsDevelopment())
    {
        return Results.Ok("Development mode steamId: " + steamId);
    }
    var steamApiKey = _configuration["Steam:ApiKey"];
    var client = _httpClientFactory.CreateClient("Steam");
    var response = await client.GetAsync($"IPlayerService/GetOwnedGames/v1/?key={steamApiKey}&steamid={steamId}");
    var content = await response.Content.ReadAsStringAsync();
    return content;
}).WithName("GetOwnedGames");


app.Run();

