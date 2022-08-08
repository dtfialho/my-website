#!/bin/bash

read -p "Enter the file name (it will also be the slug): " slug
read -p "Enter the article title: " title
read -p "Enter the article excerpt: " excerpt
read -p "Enter the image extension (extension only without dot): " image
now=$(date +%Y-%m-%dT%H:%M:%S%z)

file="./posts/$slug.md"

touch $file
echo "---" > $file
echo "title: '${title}'" >> $file
echo "date: '${now}'" >> $file
echo "hero_image: '/img/posts/${slug}.${image}'" >> $file
echo "excerpt: '${excerpt}'" >> $file
echo "---" >> $file
