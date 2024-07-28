# Configure the backend for state storage
terraform {
  backend "s3" {
    bucket = "your-bucket-name"
    key    = "terraform/state"
    region = "us-east-1"
  }
}
