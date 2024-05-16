export const LANGUAGE_VERSIONS = {
  rust: "1.68.2"
};

export const CODE_SNIPPETS = {
  rust: `\nfn main() {\n\tprintln!("Hello, world!");\n}\n`,
};

export const Difficulty = ['easy','medium', 'hard']

export const difficultyCode = {
  easy : `\nfn main() {\n\tprintln!("Hello, World!");\n}\n`,
  medium : `\nfn fibonacci(n: u32) -> u64 {\n\tmatch n {\n\t\t0 => 0,\n\t\t1 => 1,\n\t\t_ => fibonacci(n - 1) + fibonacci(n - 2),\n\t}\n}\n\nfn main() {\n\tlet n = 10; // Change this to generate a different number of Fibonacci sequence.\n\tfor i in 0..n {\n\t\tprintln!("Fibonacci({}) = {}", i, fibonacci(i));\n\t}\n}\n`,
  hard : `\nfn quicksort(arr: &mut [i32]) {\n\tif arr.len() <= 1 {\n\t\treturn;\n\t}\n\tlet pivot = arr.len() / 2;\n\tlet mut less = Vec::new();\n\tlet mut greater = Vec::new();\n\tfor (index, &val) in arr.iter().enumerate() {\n\t\tif index == pivot {\n\t\t\tcontinue;\n\t\t}\n\t\tif val <= arr[pivot] {\n\t\t\tless.push(val);\n\t\t} else {\n\t\t\tgreater.push(val);\n\t\t}\n\t}\n\tquicksort(&mut less);\n\tquicksort(&mut greater);\n\tarr[..less.len()].copy_from_slice(&less);\n\tarr[less.len()] = arr[pivot];\n\tarr[less.len() + 1..].copy_from_slice(&greater);\n}\n\nfn main() {\n\tlet mut arr = [4, 65, 2, -31, 0, 99, 83, 782, 1];\n\tprintln!("Before sorting: {:?}", arr);\n\tquicksort(&mut arr);\n\tprintln!("After sorting: {:?}", arr);\n}\n`,
}