import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  // Hàm tìm kiếm chung
  searchData(data: any[], searchTerm: string): any[] {
    const term = searchTerm.toLowerCase();
    return data.filter(item => {
      // Duyệt qua từng trường trong mỗi đối tượng
      return Object.keys(item).some(key => {
        const value = item[key] ? item[key].toString().toLowerCase() : ''; // Chuyển thành chuỗi và đảm bảo không null/undefined
        const valueWithoutTones = this.removeVietnameseTones(value); // Loại bỏ dấu nếu cần

        // Kiểm tra cả khi có dấu và không dấu
        return (
          value.includes(term) || valueWithoutTones.includes(term)
        );
      });
    });
  }

  // Hàm loại bỏ dấu tiếng Việt
  private removeVietnameseTones(str: string): string {
    const map: { [key: string]: string } = {
      'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a', 'ă': 'a', 'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
      'â': 'a', 'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a', 'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
      'ê': 'e', 'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e', 'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
      'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o', 'ô': 'o', 'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
      'ơ': 'o', 'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o', 'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
      'ư': 'u', 'ứ': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u', 'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
      'đ': 'd', 'Đ': 'd'
    };

    // Loại bỏ dấu tiếng Việt bằng cách thay thế các ký tự có dấu bằng không dấu
    return str.replace(/[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđĐ]/g, match => map[match] || match);
  }
}
