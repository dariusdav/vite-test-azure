var builder = DistributedApplication.CreateBuilder(args);


var apiService = builder.AddProject<Projects.SteamRanker_Api>("SteamRanker.Api");

builder.Build().Run();
