using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MaidFinderWebAPI.Model;
using Microsoft.EntityFrameworkCore;
using MaidFinderWebAPI;

namespace MaidFinderWebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {

                        builder.AllowAnyOrigin();


                        builder.AllowAnyHeader();
                        builder.AllowAnyMethod();
                    });


            });


            services.AddControllers();
            services.AddDbContext<MaidFinderDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DevConnection")));









        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {



            app.UseCors(options => options.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());



            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
