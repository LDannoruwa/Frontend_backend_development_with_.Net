using BackendApi.Data;
using BackendApi.Services.Implementation;
using BackendApi.Services.Interface;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//--------------------
//dependency injection and inject SightingService inside our container
//To register the services with a scoped life time
builder.Services.AddScoped<ISightingService, SightingServiceImpl>();

//To register DataContext
builder.Services.AddDbContext<DataContext>();

//dependency injection and inject FileService inside our container
//To register the services with a scoped life time
builder.Services.AddScoped<IFileService, FileServiceImpl>();
//---------------------

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//-----------------
//Enabaling CORS to allow server to get away from same-origin policy
app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
//-----------------

//-----------------
//Configure: the http request pipeline- Enabaling Static files
app.UseStaticFiles(new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(Path.Combine(builder.Environment.ContentRootPath, "ImageUpload")),
    RequestPath = "/ImageUpload"
});

app.UseHttpsRedirection();
//-----------------

app.UseAuthorization();

app.MapControllers();

app.Run();
