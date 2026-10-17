/////////// Bài 1: 
function sumArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

/////////// Bài 2: 
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

////////////// Bài 3
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

////////// Bài 4
function flattenArray(arr) {
    return arr.flat();
}

/////////// Bài 5
function isSymmetric(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
//////////////Bài 6
function findSecondLargest(arr) {
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique.length >= 2 ? unique[1] : null;
}
///////////// Bài 7
function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}
////////// Bài 8
function findMostExpensiveProduct(products) {
    if (products.length === 0) return null;
    return products.reduce((maxProduct, product) => {
        return product.price > maxProduct.price ? product : maxProduct;
    });
}
////////// Bài 9
function groupByType(arr) {
    const groups = new Map();
    for (const item of arr) {
        if (!groups.has(item.type)) {
            groups.set(item.type, []);
        }
        groups.get(item.type).push(item.name);
    }
    return Object.fromEntries(groups);
}
////////// Bài 10
function isSubset(arr1, arr2) {
    const values = new Set(arr1);
    return arr2.every(value => values.has(value));
}
/////////// Bài 11
function findMaxKey(obj) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return null;
    return keys.reduce((maxKey, key) => {
        return obj[key] > obj[maxKey] ? key : maxKey;
    });
}
// Bài 12
function mergeObjectsSumValues(obj1, obj2) {
    const result = new Map(Object.entries(obj1));
    for (const [key, value] of Object.entries(obj2)) {
        result.set(key, (result.get(key) ?? 0) + value);
    }
    return Object.fromEntries(result);
}
// Bài 13
function countElements(arr) {
    const counts = new Map();
    for (const value of arr) {
        const key = String(value);
        counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return Object.fromEntries(counts);
}
// Bài 14
function cleanObject(obj) {
    const entries = Object.entries(obj).filter(([key, value]) => {
        return value !== null && value !== undefined;
    });
    return Object.fromEntries(entries);
}
// Bài 15
function hasDuplicate(arr) {
    return new Set(arr).size < arr.length;
}
// Bài 16
function sumByGroup(arr, key) {
    const totals = new Map();
    for (const item of arr) {
        const group = item[key];
        totals.set(group, (totals.get(group) ?? 0) + item.price);
    }
    return Object.fromEntries(totals);
}
// Bài 17
function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
// Bài 18
export function isPermutation (arr1,arr2){
    if (arr1.length !== arr2.length){
        return false;
    }
    return [... arr1].sort( ).join(',')===[... arr2].sort().join(',')
}
// Bài 19
function findLongestString(arr) {
    if (arr.length === 0) return null;
    return arr.reduce((longest, str) => {
        return str.length > longest.length ? str : longest;
    });
}
// Bài 20
function intersection(arr1, arr2) {
    const values2 = new Set(arr2);
    return [...new Set(arr1)].filter(value => values2.has(value));
}
/////////// Bài 21
function filterByMinValue(arr, minValue) {
    return arr.filter(value => value >= minValue);
}
//////////// Bài 22
function findLongestValue(obj) {
    return findLongestString(Object.values(obj));
}
///////////// Bài 23
function groupByFirstLetter(arr) {
    const groups = new Map();
    for (const str of arr) {
        const firstLetter = str.charAt(0);
        if (!groups.has(firstLetter)) {
            groups.set(firstLetter, []);
        }
        groups.get(firstLetter).push(str);
    }
    return Object.fromEntries(groups);
}
// Bài 24
function getAdults(people) {
    return people.filter(person => person.age >= 18);
}
// Bài 25
function convertToArray(obj) {
    return Object.entries(obj);
}
// Bài 26
function sortStringsByLength(arr) {
    return [...arr].sort((a, b) => a.length - b.length);
}
// Bài 27
function sumByKey(arr, key) {
    return arr.reduce((sum, item) => {
        const value = item[key];
        if (typeof value === 'number' && !Number.isNaN(value)) {
            return sum + value;
        }
        return sum;
    }, 0);
}
// Bài 28
function countWords(str) {
    const trimmed = str.trim();
    return trimmed === '' ? 0 : trimmed.split(/\s+/).length;
}
///////// Bài 29
function findMinKey(obj) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return null;
    return keys.reduce((minKey, key) => {
        return obj[key] < obj[minKey] ? key : minKey;
    });
}