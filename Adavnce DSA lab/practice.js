// Problem Description
// Suppose you are at a party with n people (labeled from 1 to n) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

// Now you want to find out who the celebrity is or verify that there is not one. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

// Input format
// First Line contains two integers N,M denoting the number of people and number of connections

// Next M lines contain two integers each U,V denoting that U knows V

// Output format
// Single integer denoting the label of the celebrity if one exists otherwise -1

// Sample Input 1
// 5 8

// 4 1

// 2 5

// 5 4

// 3 2

// 2 4

// 5 1

// 2 1

// 3 1

// Sample Output 1
// 1

// Explanation 1
// Since Everyone knows 1 and 1 doesn't know anyone else, 1 is the celebrity.

// Sample Input 2
// 5 9

// 4 1

// 2 5

// 5 4

// 3 2

// 2 4

// 5 1

// 2 1

// 3 1

// 1 4
// Problem Description
// Suppose you are at a party with n people (labeled from 1 to n) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

// Now you want to find out who the celebrity is or verify that there is not one. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

// Input format
// First Line contains two integers N,M denoting the number of people and number of connections

// Next M lines contain two integers each U,V denoting that U knows V

// Output format
// Single integer denoting the label of the celebrity if one exists otherwise -1
// Sample Output 2
// -1

// Explanation 2
// Everyone knows 1, but 1 knows 4. Hence, -1 is the answer. No other possibility.

// Constraints
// 1<=N<=100000

// 1<=M<=min(N*(N-1)/2,100000)

// 1<=U,V<=N

function findCelebrity(n, edges) {
    return 0;
    
}