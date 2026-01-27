
variable "token" {
  description = "đây là token truy cập vào DO"
}
variable "public_key" {
  description = "Đây là public key lưu vào VPS để login"
}


terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "2.74.0"
    }
  }
}

provider "digitalocean" {
  token = var.token
}

resource "digitalocean_droplet" "my_vps" {
  name     = "vps-demo"
  region   = "sgp1"
  size     = "s-1vcpu-1gb"
  image    = "ubuntu-24-04-x64"
  ssh_keys = [var.public_key]

}

output "demo_output" {
  value = { id : digitalocean_droplet.my_vps.ipv4_address }
}

