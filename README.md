CHƯƠNG I: GIỚI THIỆU MÔI TRƯỜNG THIẾT KẾ VÀ CÔNG CỤ HỖ TRỢ
Giới thiệu Visual Studio Code:
Hình 1.1.1: Visual Studio Code
Visual Studio Code (VSCode) là một trình soạn thảo mã nguồn mở đa nền tảng, được phát triển bởi Microsoft. Đây là một công cụ không thể thiếu đối với các lập trình viên nhờ giao diện thân thiện và tích hợp nhiều tính năng hiện đại. Một số đặc điểm nổi bật của VSCode bao gồm:
Giao diện tùy biến: Người dùng có thể dễ dàng thay đổi giao diện bằng cách sử dụng themes hoặc cài đặt các extensions phù hợp với nhu cầu.
Tích hợp Git: Giúp quản lý version control một cách trực tiếp, bao gồm commit, push, pull, và theo dõi lịch sử thay đổi mã nguồn.
Hỗ trợ đa ngôn ngữ: Từ các ngôn ngữ cơ bản như HTML, CSS, JavaScript cho đến các ngôn ngữ nâng cao như TypeScript, Python, C++.
Debugging mạnh mẽ: Cung cấp công cụ debug tích hợp giúp kiểm tra và sửa lỗi nhanh chóng.
Hệ sinh thái phong phú: VSCode hỗ trợ hàng nghìn extension giúp tăng cường hiệu suất làm việc.
Trong dự án SPACE BOOKS, VSCode được sử dụng làm môi trường phát triển chính cho cả backend và frontend, giúp tối ưu hóa quá trình viết và quản lý mã nguồn.
Giới thiệu Angular:
Hình 1.2.2: Angular
Angular là một framework phát triển frontend hiện đại do Google phát triển, giúp xây dựng các ứng dụng web động và phản hồi nhanh. Với kiến trúc mạnh mẽ và tích hợp các tính năng tiên tiến, Angular 18 là một lựa chọn lý tưởng cho các dự án yêu cầu giao diện người dùng tương tác cao. Các tính năng nổi bật của Angular bao gồm:
TypeScript toàn diện: Angular sử dụng TypeScript, mang lại lợi ích lớn trong việc phát hiện lỗi sớm và cải thiện chất lượng mã nguồn.
Component-based architecture: Giúp chia nhỏ giao diện thành các thành phần độc lập, dễ dàng tái sử dụng và bảo trì.
Two-way data binding: Đảm bảo đồng bộ hóa dữ liệu giữa giao diện và logic ứng dụng, giảm thiểu công sức viết mã.
Dependency Injection (DI): Quản lý các phụ thuộc một cách hiệu quả, hỗ trợ mở rộng và tích hợp dễ dàng.
Hiệu năng tối ưu: Angular tích hợp các tính năng như lazy loading và tree shaking để giảm thiểu dung lượng tải và cải thiện tốc độ ứng dụng.
Cộng đồng và tài liệu phong phú: Angular được hỗ trợ bởi một cộng đồng lớn cùng tài liệu chi tiết, giúp việc học tập và phát triển trở nên dễ dàng hơn.
Trong SPACE BOOKS, Angular được sử dụng để xây dựng giao diện người dùng, từ các tính năng quản lý sách, tìm kiếm, đến thao tác mượn và trả sách. Nhờ Angular, hệ thống có thể cung cấp trải nghiệm người dùng mượt mà, tương tác cao, đồng thời đảm bảo khả năng mở rộng và tích hợp với backend do Nest.js cung cấp.
Giới thiệu Nest.js:
Hình 1.3.3: Nest.js
Nest.js là một framework Node.js tiên tiến, được thiết kế nhằm tối ưu hóa việc phát triển các ứng dụng server-side. Với kiến trúc hướng mô-đun và hỗ trợ TypeScript toàn diện, Nest.js giúp các nhà phát triển dễ dàng xây dựng và quản lý các ứng dụng quy mô lớn. Các tính năng đáng chú ý của Nest.js bao gồm:
Kiến trúc mô-đun hóa: Cho phép chia nhỏ ứng dụng thành các mô-đun độc lập, dễ dàng bảo trì và mở rộng.
Hỗ trợ TypeScript: Mang lại lợi ích về kiểm tra kiểu tĩnh, giảm thiểu lỗi trong quá trình phát triển.
Tích hợp các công nghệ phổ biến: Hỗ trợ tích hợp với GraphQL, WebSockets, Microservices và nhiều thư viện khác.
Dependency Injection (DI): Giúp quản lý các phụ thuộc một cách hiệu quả, giảm thiểu sự phụ thuộc trực tiếp giữa các thành phần.
Trong dự án SPACE BOOKS, Nest.js đóng vai trò quan trọng trong việc xây dựng hệ thống backend, cung cấp các API RESTful để xử lý các yêu cầu từ frontend. Các thành phần quan trọng được triển khai bao gồm xác thực người dùng, quản lý dữ liệu sách và ghi nhận các hoạt động mượn trả sách.

Giới thiệu MySQL:
Hình 1.4.4: MySQL
MySQL là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) được sử dụng phổ biến trong nhiều hệ thống quản lý dữ liệu. Với hiệu suất cao và tính ổn định, MySQL là lựa chọn lý tưởng cho dự án SPACE BOOKS. Một số đặc điểm nổi bật của MySQL bao gồm:
Hiệu năng vượt trội: Phù hợp với các ứng dụng đòi hỏi xử lý dữ liệu lớn và nhiều người dùng đồng thời.
Ngôn ngữ SQL quen thuộc: Giúp lập trình viên dễ dàng truy vấn, quản lý và thao tác với dữ liệu.
Khả năng bảo mật cao: Hỗ trợ các phương pháp xác thực và mã hóa dữ liệu, đảm bảo an toàn cho hệ thống.
Khả năng mở rộng: Dễ dàng tích hợp với các framework hiện đại như Nest.js thông qua ORM (Object-Relational Mapping) như TypeORM hoặc Sequelize.
Trong SPACE BOOKS, MySQL được sử dụng để lưu trữ và quản lý dữ liệu của hệ thống. MySQL không chỉ đảm bảo hiệu năng mà còn hỗ trợ tốt trong việc tổ chức dữ liệu một cách logic và hiệu quả, phục vụ tốt cho nhu cầu quản lý thư viện.
JWT (JSON Web Token):
JWT (JSON Web Token) là một tiêu chuẩn mở cho phép truyền tải thông tin an toàn giữa các bên dưới dạng một đối tượng JSON. JWT thường được sử dụng để xác thực người dùng trong các ứng dụng web.
Các thành phần chính của JWT:
Header: Chứa thông tin về loại token và thuật toán mã hóa.
Payload: Chứa các thông tin cần thiết (claims) như thông tin người dùng và quyền hạn.
Signature: Được tạo ra bằng cách mã hóa header và payload, giúp xác thực tính toàn vẹn của token.
Tính năng của JWT:
Xác thực: Giúp xác thực người dùng mà không cần lưu trữ trạng thái trên server.
Phân quyền: Có thể gán quyền truy cập cho người dùng dựa trên thông tin trong token.
Bảo mật: Thông tin được mã hóa, giúp bảo vệ dữ liệu nhạy cảm.
Mô hình MVC và RESTful API:
Cách Angular và Nest.js tương tác với nhau trong mô hình MVC:
Mô hình MVC (Model – View – Controller) là một kiến trúc phổ biến trong phát triển phần mềm, giúp tổ chức mã nguồn theo các phần tách biệt để dễ dàng quản lý và bảo trì. Trong bối cảnh của một ứng dụng sử dụng Angular và Nest.js, mô hình này có thể được hiểu như sau:
Model: Là phần chứa dữ liệu và logic kinh doanh của ứng dụng. Trong trường hợp này, Nest.js và MySQL thường được sử dụng để quản lý dữ liệu. Model có nhiệm vụ quản lý việc lấy, cập nhật và lưu trữ dữ liệu.
View: Là phần giao diện người dùng mà người dùng tương tác. Angular đảm nhiệm vai trò này với khả năng tạo ra các component và template để hiển thị dữ liệu từ model. Angular cũng xử lý các tương tác của người dùng và cập nhật giao diện một cách động.
Controller: Là phần xử lý logic điều khiển giữa Model và View. Trong một ứng dụng Angular, component có thể được coi như controller. Khi người dùng thực hiện hành động (ví dụ: nhấn nút), component sẽ gọi các dịch vụ để tương tác với backend (Nest.js) nhằm lấy dữ liệu và cập nhật view.
Tương tác giữa Angular và Nest.js:
Gửi yêu cầu từ Angular: Khi người dùng thực hiện một hành động, component Angular sẽ gọi một dịch vụ (service) để gửi yêu cầu HTTP đến backend (Nest.js).
Xử lý yêu cầu trên Nest.js: Nest.js nhận yêu cầu, xử lý dữ liệu thông qua model, và trả về phản hồi.
Cập nhật giao diện: Angular nhận phản hồi từ Nest.js và cập nhật view theo dữ liệu mới nhận được.
Giao tiếp qua RESTful API:
RESTful API là một kiểu API sử dụng các phương thức HTTP (GET, POST, PUT, DELETE) để tương tác với tài nguyên qua URL. Đây là cách phổ biến để cho phép giao tiếp giữa frontend và backend trong một ứng dụng web.
Các nguyên tắc của RESTful API:
Tài nguyên (Resources): Tài nguyên được xác định qua URL. Mỗi tài nguyên (như người dùng, sản phẩm, đơn hàng) có một định danh riêng.
Phương thức HTTP: Sử dụng các phương thức như:
GET: Để lấy dữ liệu từ server.
POST: Để tạo tài nguyên mới trên server.
PUT: Để cập nhật tài nguyên đã tồn tại.
DELETE: Để xóa tài nguyên.
Trạng thái phản hồi (Response Status): Mỗi yêu cầu sẽ nhận được một trạng thái phản hồi, cho biết kết quả của yêu cầu, ví dụ như 200 (OK), 404 (Not Found), 500 (Internal Server Error).
Giao tiếp qua RESTful API trong Angular và Nest.js:
Tạo endpoint trên Nest.js: Nest.js sẽ cung cấp các endpoint để xử lý các yêu cầu từ Angular. Ví dụ, một endpoint có thể là /api/users để lấy danh sách người dùng.
Gửi yêu cầu từ Angular: Angular sử dụng HttpClient để gửi yêu cầu đến các endpoint RESTful. Khi người dùng nhấn nút "Lấy danh sách người dùng", Angular sẽ gửi yêu cầu GET đến endpoint /api/users.
Nhận dữ liệu và cập nhật giao diện: Nest.js xử lý yêu cầu và trả về danh sách người dùng. Angular nhận dữ liệu này và cập nhật giao diện người dùng, hiển thị danh sách người dùng.
Lợi ích của giao tiếp qua RESTful API:
Tách biệt: Frontend và backend được tách biệt rõ ràng, giúp dễ dàng phát triển và bảo trì từng phần.
Khả năng mở rộng: Có thể dễ dàng thêm mới hoặc sửa đổi các endpoint mà không làm gián đoạn các phần khác của ứng dụng.
Khả năng tương tác: Các ứng dụng khác cũng có thể tương tác với API một cách dễ dàng, giúp tăng cường khả năng tích hợp.

CHƯƠNG II: TỔNG QUAN ĐỀ TÀI
Giới thiệu đề tài:
Tên đề tài: Thư viện SPACE BOOKS.
Đối tượng nghiên cứu đề tài: 
Quản trị viên: Đảm nhận vai trò quản lý thông tin sách, danh mục, người dùng, và ghi nhận các giao dịch mượn trả.
Người dùng: Tìm kiếm sách, xem thông tin sách, và gửi yêu cầu mượn.
Một số trang chính của Website:
Dành cho quản trị viên (Admin):
Trang thống kê: Hiện thị số liệu sách hiện có, thể loại, số liệu sách mượn bà các thông báo nhắc nhở người dùng khi đến hạn trả sách.
Quản lý sách: Cho phép thêm, sửa, xóa và hiện thị sách trên website.
Quản lý thể loại: Tổ chức và chỉnh sửa thể loại sách.
Quản lý nhân viên: Quản lý tài khoản nhân viên.
Quản lý người dùng: Quản lý tài khoản user.
Quản lý mượn trả: Theo dõi và xử lý các yêu cầu giao dịch mượn trả sách.
Quản lý liên hệ: Xem và xử lý các yêu cầu hỗ trợ từ user.
Dành cho người dùng (User):
Trang chủ: Hiển thị mục giới thiệu về website và các sách nổi bật.
Thể loại: Hiện thị sách theo từng thể loại.
Mượn sách: Hiện thị form mượn sách.
Liên hệ: Cho phép user gửi phiếu yêu cầu hỗ trợ về admin.
Lý do chọn đề tài:
Trong thời đại công nghệ phát triển mạnh mẽ, các thư viện không chỉ còn là nơi lưu trữ và cho mượn sách truyền thống mà đang dần chuyển mình trở thành những trung tâm tri thức số hóa. Với sự thay đổi này, việc xây dựng một website quản lý thư viện không chỉ đơn thuần giúp quản lý tốt hơn mà còn tạo nên một cầu nối giữa thư viện và độc giả trong môi trường trực tuyến.
Đầu tiên, website quản lý thư viện là giải pháp giúp số hóa các tài nguyên tri thức, giúp độc giả dễ dàng tiếp cận nguồn sách, tài liệu mọi lúc, mọi nơi mà không bị giới hạn bởi không gian hay thời gian. Điều này mang lại sự thuận tiện tối đa cho người dùng, đặc biệt là những người có quỹ thời gian hạn chế.
Thứ hai, việc phát triển website còn giúp tối ưu hóa hoạt động nội bộ của thư viện, từ quản lý danh mục sách, theo dõi lịch sử mượn trả đến cập nhật nhanh chóng các tài liệu mới. Nhờ đó, giảm thiểu được các sai sót thủ công và nâng cao hiệu quả vận hành.
Ngoài ra, đề tài này cũng mang lại cơ hội để thư viện SPACE BOOKS phát triển theo hướng hiện đại hơn, chẳng hạn như tích hợp các tính năng độc đáo như thống kê thói quen đọc sách, gợi ý tài liệu theo sở thích cá nhân, hoặc kết nối với các thư viện khác để mở rộng nguồn tài nguyên. Điều này không chỉ nâng cao trải nghiệm của độc giả mà còn khẳng định vị thế của thư viện trong cộng đồng tri thức.
Cuối cùng, việc lựa chọn đề tài còn xuất phát từ mong muốn tạo ra một nền tảng công nghệ phù hợp với xu hướng phát triển bền vững, nơi mà tri thức được chia sẻ và lan tỏa rộng rãi hơn. Website thư viện không chỉ là một công cụ quản lý mà còn là biểu tượng của sự đổi mới, góp phần xây dựng một môi trường học tập và nghiên cứu lý tưởng.
Tóm lại, việc xây dựng website quản lý thư viện SPACE BOOKS không chỉ đáp ứng nhu cầu hiện đại hóa mà còn mở ra cơ hội lớn trong việc nâng cao giá trị tri thức, giúp kết nối thư viện với nhiều đối tượng độc giả hơn trong thời kỳ hội nhập công nghệ số.
Mục tiêu của đề tài:
Đề tài nhằm mục tiêu xây dựng một nền tảng trực tuyến hiện đại để tối ưu hóa việc quản lý và phục vụ độc giả của thư viện SPACE BOOKS. Trọng tâm là phát triển một website thân thiện với người dùng, dễ sử dụng và có giao diện trực quan.
Website sẽ cung cấp thông tin chi tiết và chính xác về danh mục sách, tình trạng sẵn có, thông tin sách, thể loại và các tài liệu mới nhất. Một tính năng quan trọng là hệ thống tìm kiếm thông minh, cho phép người dùng nhanh chóng tra cứu sách hoặc tài liệu theo từ khóa, chủ đề hoặc thể loại.
Bên cạnh đó, đề tài tập trung vào việc tích hợp hệ thống mượn và trả sách trực tuyến, giúp độc giả dễ dàng đăng ký mượn sách, theo dõi trạng thái tài liệu và nhận thông báo khi đến hạn trả.
Hệ thống quản lý nội bộ sẽ hỗ trợ thư viện theo dõi và quản lý tài liệu, độc giả, cũng như phân tích dữ liệu để đưa ra các báo cáo thống kê chi tiết. Điều này không chỉ giúp giảm thiểu sai sót thủ công mà còn hỗ trợ việc ra quyết định chiến lược, tối ưu hóa hoạt động quản lý.
Tóm lại, mục tiêu của đề tài không chỉ là thiết kế một website quản lý thư viện hoàn chỉnh mà còn là xây dựng một hệ thống hỗ trợ hiện đại, góp phần nâng cao chất lượng dịch vụ, thúc đẩy văn hóa đọc và khẳng định vai trò của thư viện SPACE BOOKS trong cộng đồng tri thức.
