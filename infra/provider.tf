terraform {
  required_providers {
    aws = {
      version = "5.46.0"
      source  = "hashicorp/aws"
    }
  }
}
provider "aws" {
  profile = "default"
  region  = "us-east-1"
}
