# component - component basics

# JSX

**JSX** là một cú pháp mở rộng của JavaScript được sử dụng trong React để mô tả giao diện người dùng (UI). **JSX** giống như một hỗn hợp giữa XML hoặc HTML và JavaScript, cho phép bạn viết cấu trúc UI trong mã JavaScript một cách trực quan và dễ đọc.

#### Tại sao sử dụng JSX?

1. **Tính trực quan**: JSX giúp mã trở nên dễ đọc và dễ viết hơn khi làm việc với giao diện người dùng trong JavaScript.
2. **Hiệu năng**: JSX được biên dịch thành JavaScript trước khi chạy trong trình duyệt, giúp cải thiện hiệu suất.
3. **Dễ kết hợp**: JSX cho phép bạn kết hợp cấu trúc HTML và logic JavaScript một cách dễ dàng.

#### Cách hoạt động của JSX

Trong quá trình biên dịch, JSX được chuyển đổi thành các lời gọi hàm JavaScript. Ví dụ, đoạn JSX sau:

```
const element = <h1>Hello, world!</h1>;
```

Sẽ được biên dịch thành JavaScript như sau:
```
const element = React.createElement('h1', null, 'Hello, world!');
```

#### Lưu ý khi sử dụng JSX

- **className:** Thay vì `class` như trong HTML, trong JSX, bạn sẽ sử dụng `className` để chỉ định `class` CSS cho một phần tử.

 - **camelCase:** Các thuộc tính và sự kiện DOM trong JSX sử dụng `camelCase` thay vì chữ thường. Ví dụ: `onclick` trong HTML sẽ trở thành `onClick` trong JSX.


 Tóm lại, JSX không phải là một yêu cầu bắt buộc khi viết ứng dụng React, nhưng nó là một tiện ích phổ biến giúp việc phát triển ứng dụng trở nên dễ dàng và trực quan hơn.

 # Props và State

Trong React, `props` và `state` là hai khái niệm cốt lõi giúp bạn quản lý dữ liệu và giao diện người dùng trong các ứng dụng. Dù cả hai đều dùng để quản lý dữ liệu, chúng có mục đích và cách sử dụng khác nhau.

#### Props (Properties)
1. **Định nghĩa:** `Props` là viết tắt của Properties. Đây là cơ chế để truyền dữ liệu và sự kiện qua lại giữa các component cha và con. `Props` được sử dụng để truyền dữ liệu từ component bên ngoài vào bên trong component, giúp tạo các component có thể tái sử dụng và tách biệt với nhau.
2. **Tính bất biến:** `Props` là bất biến trong lifecycle của một component. Điều này có nghĩa là bạn không thể thay đổi `props` từ bên trong component nhận `props` đó. Nếu cần thay đổi dữ liệu, bạn phải thực hiện ở component cha và truyền dữ liệu mới qua `props`.
3. **Dùng để:** Truyền dữ liệu và `callback` giữa các component, tạo các component có thể tái sử dụng.

#### State
1. **Định nghĩa:** `State` là trạng thái nội bộ của một component. Trong khi props cho phép bạn truyền dữ liệu và sự kiện qua lại giữa các component, `state` cho phép bạn quản lý, cập nhật dữ liệu trong phạm vi của một component cụ thể.
2. **Tính có thể thay đổi:** `State` có thể thay đổi, và khi `state` thay đổi, component sẽ re-render (tái hiển thị) để phản ánh sự thay đổi đó. Việc cập nhật state phải được thực hiện thông qua hàm `setState` (trong `class components`) hoặc hàm cập nhật từ `useState` (trong `functional components`), không được thay đổi trực tiếp.
3. **Dùng để:** Quản lý dữ liệu, hành vi, và trạng thái của UI trong một component cụ thể.


#### Ví dụ Minh họa
Giả sử bạn có một component `Message` và bạn muốn hiển thị một thông điệp:
```
function Message(props) {
  return <h1>{props.message}</h1>;
}
```
Bạn có thể sử dụng `Message` như sau:
```
<Message message="Hello, world!" />
```
Ở đây, `message` là một prop. Nó được truyền từ bên ngoài và được sử dụng bên trong component `Message`.

#### kết luận
Trong khi `props` giúp bạn truyền dữ liệu và sự kiện giữa các component, state cho phép bạn quản lý dữ liệu và trạng thái cụ thể của một component. Hiểu rõ cách sử dụng hai khái niệm này sẽ giúp bạn xây dựng các ứng dụng React hiệu quả và dễ bả

### note: phân biệt mutable và immutable