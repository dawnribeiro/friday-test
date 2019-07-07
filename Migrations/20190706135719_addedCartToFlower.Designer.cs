﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using friday_test;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20190706135719_addedCartToFlower")]
    partial class addedCartToFlower
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("friday_test.Models.Cart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.HasKey("Id");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("friday_test.Models.Flower", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CartId");

                    b.Property<string>("Color");

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<int>("NumberInStock");

                    b.Property<decimal>("Price");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.HasIndex("CartId");

                    b.ToTable("Flowers");
                });

            modelBuilder.Entity("friday_test.Models.Flower", b =>
                {
                    b.HasOne("friday_test.Models.Cart", "cart")
                        .WithMany("Flowers")
                        .HasForeignKey("CartId");
                });
#pragma warning restore 612, 618
        }
    }
}