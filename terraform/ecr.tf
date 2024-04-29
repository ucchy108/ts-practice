locals {
  ecr-lifecycle-policy = {
    rules = [
      {
        action = {
          type = "expire"
        }
        description  = "最新のイメージを2つ残す"
        rulePriority = 1
        selection = {
          countNumber = 2
          countType   = "imageCountMoreThan"
          tagStatus   = "any"
        }
      }
    ]
  }
}

resource "aws_ecr_repository" "test_uchihara" {
  encryption_configuration {
    encryption_type = "AES256"
  }

  image_tag_mutability = "MUTABLE"
  name                 = "test-uchihara"
}

resource "aws_ecr_lifecycle_policy" "test_uchihara" {
  repository = aws_ecr_repository.test_uchihara.name
  policy     = jsonencode(local.ecr-lifecycle-policy)
}