const Header = {
    render() {
        return `<div class="bg-sky-900">
        <img src="img/Untitled-2.png" alt="" class="m-auto" />
      </div>
      <div class="bg-orange-400">
        <div class="flex justify-between items-center mx-2">
          <ul class="">
            <li class="inline-block mx-3">
              <a href="#" class="block text-white py-3 hover:text-black"
                >Trang Chủ</a
              >
            </li>
            <li class="inline-block mx-3">
              <a href="/signin" class="block text-white py-3 hover:text-black"
                >Đăng nhập</a
              >
            </li>
            <li class="inline-block mx-3">
              <a href="/signup" class="block text-white py-3 hover:text-black"
                >Đăng ký</a
              >
            </li>
        
          </ul>
          <form class="">
            <input type="text" />
            <a
              href="#"
              class="text-white bg-blue-500 border border-white px-1"
              >Tìm Kiếm</a
            >
          </form>
        </div>
      </div>`;
    },
};

export default Header;
