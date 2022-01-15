import data from "../../data";

let content;
const News = {
    render() {
        content = "";
        data.forEach((current) => {
            content += `<tr>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src="${current.img}" alt="">
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm font-medium text-gray-900">
        <a href="">${current.title}</a>
      </div>
         
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          ${current.desc}
        </td>
       
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="news/${current.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </td>
      </tr>`;
        });
        return `
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            News
          </h1>
        </div>
        <div style="width: 100; text-align: right;" class="">
        <a href="news/add" class="text-white bg-blue-500 border border-white px-2"
          >Add News</a
        >
      </div>
      </header>
      <div class="flex flex-col ">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                   
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Desc
                  </th>
                    
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">${content}
                  <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>`;
    },
};

export default News;
