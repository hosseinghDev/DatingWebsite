using System.ComponentModel.DataAnnotations;

namespace API.Model
{
    public class AppUser
    {
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public byte[] PasswordHash { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }
    }
}
