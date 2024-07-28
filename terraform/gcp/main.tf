resource "google_compute_instance" "default" {
  name         = "loom-instance"
  machine_type = var.machine_type
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = var.image
    }
  }

  network_interface {
    network = "default"
    access_config {
    }
  }

  metadata_startup_script = <<-EOF
              #!/bin/bash
              apt-get update
              apt-get install -y git nodejs npm
              git clone https://github.com/nturing/loom.git /home/ubuntu/loom
              cd /home/ubuntu/loom
              npm install
              npm start
              EOF
}

output "instance_ip" {
  value = google_compute_instance.default.network_interface[0].access_config[0].nat_ip
}
