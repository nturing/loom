resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = var.instance_type

  user_data = <<-EOF
              #!/bin/bash
              apt-get update
              apt-get install -y git nodejs npm
              git clone https://github.com/nturing/loom.git /home/ubuntu/loom
              cd /home/ubuntu/loom
              npm install
              npm start
              EOF

  tags = {
    Name = "LoomApp"
  }
}
