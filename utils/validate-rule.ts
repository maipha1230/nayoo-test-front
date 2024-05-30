export const notEmptyRules = (fieldName: string)  => [
    (value: string): boolean | string => {
        if (value) return true;
        return `กรุณากรอก ${fieldName}`;
      },
]

export const passwordRules = [
    (value: string): boolean | string => {
      if (value) return true;
      return 'กรุณากรอกรหัสผ่าน';
    },
    (value: string): boolean | string => {
      if (value.length >= 8) return true;
      return 'รหัสผ่านควรมีอย่างน้อย 8 ตัวอักษร';
    },
    (value: string): boolean | string => {
      if (/[A-Z]/.test(value)) return true;
      return 'รหัสผ่านควรประกอบด้วยตัวอักษณพิมพ์ใหญ่';
    },
    (value: string): boolean | string => {
      if (/[a-z]/.test(value)) return true;
      return 'รหัสผ่านควรประกอบด้วยตัวอักษรพิมพ์เล็ก';
    },
    (value: string): boolean | string => {
      if (/\d/.test(value)) return true;
      return 'รหัสผ่านควรประกอบด้วยตัวเลข';
    },
    (value: string): boolean | string => {
      if (/[^A-Za-z0-9]/.test(value)) return true;
      return 'รหัสผ่านควรประกอบด้วยอักขระพิเศษ';
    },
  ];

export const phoneRules = [
    (value: string): boolean | string => {
      if (value) return true;
      return 'กรุณากรอกเบอร์โทร';
    },
    (value: string): boolean | string => {
      if (value.length == 10) return true;
      return 'เบอร์โทรควรมี 10 ตัว';
    },
  ];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  export const emailRules = [
    (value: string): boolean | string => {
      if (value) return true;
      return 'กรุรากรอกอีเมล';
    },
    (value: string): boolean | string => {
      if (emailPattern.test(value)) return true;
      return 'อีเมลไม่ถูกต้อง';
    },
  ];

