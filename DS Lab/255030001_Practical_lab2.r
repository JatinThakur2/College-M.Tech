## Online R compiler to run R program online
## Print "Try programiz.pro" message
# 1. Write a R program to create a vector of a specified type and length. Create a vector of numeric, complex, logical, and character types of length 6.
numeric_vec <- numeric(6)     # Numeric vector (default 0s)
complex_vec <- complex(6)     # Complex vector (default 0+0i)
logical_vec <- logical(6)     # Logical vector (default FALSE)
character_vec <- character(6) # Character vector (default "")

# Print the vectors
print("Numeric Vector:")
print(numeric_vec)

print("Complex Vector:")
print(complex_vec)

print("Logical Vector:")
print(logical_vec)

print("Character Vector:")
print(character_vec)



# 2. Write a R program to add two vectors of integer type and length 3.
vec1 <- c(1L, 2L, 3L)  # Integer vector
vec2 <- c(4L, 5L, 6L)  # Integer vector
sum_vec <- vec1 + vec2 # Element-wise addition

print("Sum of two integer vectors:")
print(sum_vec)

# 3. Write a R program to create a list containing a vector, a matrix, and a list and remove the second element.
vec <- c(1, 2, 3)
mat <- matrix(1:4, nrow = 2)
inner_list <- list("a", "b")

my_list <- list(vec, mat, inner_list)
print("Original List:")
print(my_list)

my_list[[2]] <- NULL  # Remove second element (the matrix)

print("List after removing second element:")
print(my_list)


# 4. Write a R program to create a list containing a vector, a matrix, and a list and update the last element.
vec2 <- c(10, 20, 30)
mat2 <- matrix(5:8, nrow = 2)
inner_list2 <- list("x", "y")

my_list2 <- list(vec2, mat2, inner_list2)
print("Original List:")
print(my_list2)

my_list2[[3]] <- list("updated", "element")  # Update last element

print("List after updating last element:")
print(my_list2)






