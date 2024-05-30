export const onlyNumber = ($event: KeyboardEvent) => {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57)) {
       $event.preventDefault();
    }
 }
export const phoneNumber = ($event: KeyboardEvent, value: string) => {
    let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
    if ((keyCode < 48 || keyCode > 57) || (value.length >= 10)) {
       $event.preventDefault();
    }
 }
 export const onlyThai = ($event: KeyboardEvent) => {
    const keyCode = $event.keyCode ? $event.keyCode : $event.which;
    // Thai characters in Unicode range: 0E00–0E7F
    if ((keyCode < 0x0E00 || keyCode > 0x0E7F) && keyCode !== 32) {
       $event.preventDefault();
    }
}
export const onlyEnglish = ($event: KeyboardEvent) => {
    const keyCode = $event.keyCode ? $event.keyCode : $event.which;
    // English letters in Unicode ranges: Basic Latin (00-7F) and Latin-1 Supplement (80-FF)
    if ((keyCode < 0x0041 || (keyCode > 0x005A && keyCode < 0x0061) || keyCode > 0x007A) && keyCode !== 32) {
       $event.preventDefault();
    }
};