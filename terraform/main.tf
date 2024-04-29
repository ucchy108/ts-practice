provider "aws" {
  region  = "ap-northeast-1"
  profile = "dev"
}

terraform {
  required_version = ">= 1.2.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
    bucket  = "test-uchihara"
    key     = "test.tftate"
    region  = "ap-northeast-1"
    profile = "dev"
  }
}
