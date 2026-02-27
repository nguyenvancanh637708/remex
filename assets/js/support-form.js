document.addEventListener('DOMContentLoaded', () => {
    const supportForm = document.getElementById('supportForm');
    const submitBtn = document.getElementById('submitSupportFormBtn');
    const formMessage = document.getElementById('formMessage');
    const fileInput = document.getElementById('attachment');
    const fileNameDisplay = document.getElementById('fileNameDisplay');
    const submitBtnSpan = submitBtn ? submitBtn.querySelector('span') : null;

    if (!supportForm) return;

    // Hiển thị tên file khi người dùng chọn file
    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function(e) {
            if (this.files && this.files.length > 0) {
                // Rút gọn tên file nếu quá dài
                let fileName = this.files[0].name;
                if (fileName.length > 30) {
                    fileName = fileName.substring(0, 20) + '...' + fileName.substring(fileName.lastIndexOf('.'));
                }
                fileNameDisplay.textContent = fileName;
                fileNameDisplay.classList.remove('text-gray-500');
                fileNameDisplay.classList.add('text-gray-900', 'font-medium');
            } else {
                fileNameDisplay.textContent = 'Chọn file để tải lên';
                fileNameDisplay.classList.add('text-gray-500');
                fileNameDisplay.classList.remove('text-gray-900', 'font-medium');
            }
        });
    }

    supportForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Chuẩn bị UI
        if (submitBtn) {
            submitBtn.disabled = true;
            if (submitBtnSpan) submitBtnSpan.textContent = 'Đang gửi...';
            // Thêm icon loading (spinner) nếu muốn
            const spinner = document.createElement('svg');
            spinner.className = 'animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block';
            spinner.id = 'loadingSpinner';
            spinner.innerHTML = `<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>`;
            submitBtn.prepend(spinner);
        }
        
        hideMessage();

        // 2. Thu thập dữ liệu
        const formData = new FormData(supportForm);
        
        // Kiểm tra xem có file đính kèm không, nếu không có file thì xóa key attachment khỏi formData
        // để tránh lỗi ở backend nếu backend không bắt file trống chuẩn
        const fileField = formData.get('attachment');
        if (fileField && fileField.size === 0) {
            formData.delete('attachment');
        }

        // 3. Gọi API
        try {
            const response = await fetch('http://localhost:8082/api/v1/support/tickets', {
                method: 'POST',
                // Không set Content-Type: multipart/form-data. Trình duyệt sẽ tự động set khi dùng FormData và sinh ra boundary đúng
                body: formData
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Thành công
                showMessage('success', result.message || 'Gửi yêu cầu hỗ trợ thành công. Chúng tôi sẽ phản hồi sớm nhất.');
                supportForm.reset();
                if (fileNameDisplay) {
                    // Reset text file
                    fileNameDisplay.textContent = 'Chọn file để tải lên';
                    fileNameDisplay.classList.add('text-gray-500');
                    fileNameDisplay.classList.remove('text-gray-900', 'font-medium');
                }
            } else {
                // Thất bại từ API trả về (Lỗi 400, dữ liệu không hợp lệ,...)
                let errorMsg = result.message || 'Có lỗi xảy ra, vui lòng thử lại sau.';
                if (result.errors) {
                    // Nếu có object errors chi tiết từng field
                    const errorDetails = Object.values(result.errors).join(', ');
                    errorMsg += ' ' + errorDetails;
                }
                showMessage('error', errorMsg);
            }

        } catch (error) {
            // Lỗi mạng hoặc CORS
            console.error('Error submitting form:', error);
            showMessage('error', 'Không thể kết nối đến máy chủ. Vui lòng kiểm tra mạng hoặc thử lại sau.');
        } finally {
            // 4. Reset UI Loading
            if (submitBtn) {
                submitBtn.disabled = false;
                if (submitBtnSpan) submitBtnSpan.textContent = 'Gửi yêu cầu'; // (Nên gọi i18n chỗ này nếu cần)
                const spinner = document.getElementById('loadingSpinner');
                if (spinner) spinner.remove();
            }
        }
    });

    function showMessage(type, message) {
        if (!formMessage) return;
        
        formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-800', 'border-green-400', 'bg-red-100', 'text-red-800', 'border-red-400');
        formMessage.classList.add('border');
        
        if (type === 'success') {
            formMessage.classList.add('bg-green-100', 'text-green-700', 'border-green-400');
        } else {
            formMessage.classList.add('bg-red-100', 'text-red-700', 'border-red-400');
        }
        
        formMessage.innerHTML = message;
    }

    function hideMessage() {
        if (!formMessage) return;
        formMessage.classList.add('hidden');
        formMessage.innerHTML = '';
    }
});
