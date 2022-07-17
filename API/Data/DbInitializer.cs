using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    PictureUrl = "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    Description = "E-commerce store with .Net, React,Redux, C#, Stripe,Cloudinary,TypeScript, EntityFramework, CoreIdentity Authentication etc.",
                    Link = "https://github.com/ArgimKaliqi/Lab-Project---ETAR/tree/99600b3bad59d7b639fccaeb945a2787fb622807",
                },

                new Product
                {
                    PictureUrl = "https://i.postimg.cc/vB5hGvPC/Capture.png",
                    Description = "Personal CV - Using HTML CSS JAVASCRIPT BOOTSTRAP",
                    Link = "https://argimkaliqi.github.io/CV/",
                },
                new Product {
                    PictureUrl = "https://images.pexels.com/photos/8357333/pexels-photo-8357333.jpeg?cs=srgb&dl=pexels-marina-m-8357333.jpg&fm=jpg",
                    Description = "Reservation System - Java",
                    Link = "https://argimkaliqi.github.io/CV/",
                }
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
