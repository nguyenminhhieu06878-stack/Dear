// Particle system for background
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        // Create canvas for particles
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'particles-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${Math.random() * 60 + 250}, 70%, 70%)`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Floating hearts animation
class FloatingHearts {
    constructor() {
        this.hearts = [];
        this.init();
    }

    init() {
        setInterval(() => {
            if (Math.random() < 0.3) {
                this.createHeart();
            }
        }, 2000);
    }

    createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💕', '💖', '💗', '💝'][Math.floor(Math.random() * 4)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10';
        heart.style.transition = 'all 4s linear';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.top = '-50px';
            heart.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 4000);
    }
}

// Interactive functions
function showForgiveness() {
    const messages = [
        "Cảm ơn em đã cho anh cơ hội! Chúng ta sẽ cùng nhau tiến bước! 💕",
        "Em là người tuyệt vời! Chúng ta sẽ xây dựng tương lai tốt đẹp! 💖",
        "Anh sẽ cố gắng để mối quan hệ của chúng ta ngày càng bền vững! 💗",
        "Cảm ơn em đã tin tưởng anh! Chúng ta sẽ cùng nhau trưởng thành! 💝"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showResponse(randomMessage);
    
    // Create celebration effect
    createCelebrationEffect();
}

function showHug() {
    const messages = [
        "Cảm ơn em! Chúng ta sẽ cùng nhau vượt qua mọi khó khăn! 🤗💕",
        "Em là người bạn đồng hành tuyệt vời của anh! 🤗💖",
        "Chúng ta sẽ học hỏi và phát triển cùng nhau! 🤗💗",
        "Cảm ơn em đã ở bên anh! Chúng ta sẽ cùng nhau tiến bước! 🤗💝"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showResponse(randomMessage);
    
    // Create hug effect
    createHugEffect();
}

function showResponse(message) {
    const responseElement = document.getElementById('response-message');
    responseElement.textContent = message;
    responseElement.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        responseElement.classList.remove('show');
    }, 5000);
}

function createCelebrationEffect() {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '✨', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 6)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = Math.random() * window.innerHeight + 'px';
            confetti.style.fontSize = '20px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }
}

function createHugEffect() {
    // Create heart burst effect
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = '25px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.transform = 'translate(-50%, -50%)';
            heart.style.animation = `heartBurst 2s ease-out forwards`;
            heart.style.animationDelay = `${i * 0.1}s`;
            
            const angle = (i / 30) * Math.PI * 2;
            const distance = 100 + Math.random() * 50;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.setProperty('--endX', endX + 'px');
            heart.style.setProperty('--endY', endY + 'px');
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (document.body.contains(heart)) {
                    document.body.removeChild(heart);
                }
            }, 2000);
        }, i * 50);
    }
}

// Add CSS animations dynamically
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes heartBurst {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2);
                opacity: 1;
            }
            100% {
                transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for better UX
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Image Modal/Popup functionality
class ImageModal {
    constructor() {
        console.log('🔧 Initializing ImageModal...');
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalCaption = document.getElementById('modalCaption');
        this.closeBtn = document.querySelector('.close');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentIndex = 0;
        this.images = [];
        
        // Check if elements exist
        if (!this.modal || !this.modalImage || !this.modalCaption) {
            console.error('❌ Modal elements not found!');
            return;
        }
        
        console.log('✅ Modal elements found');
        this.init();
        
        // Test modal after a short delay
        setTimeout(() => {
            this.testModal();
        }, 1000);
    }
    
    testModal() {
        console.log('🧪 Testing modal functionality...');
        console.log('📊 Images collected:', this.images.length);
        console.log('🎯 Gallery images found:', document.querySelectorAll('.gallery-photo').length);
        
        if (this.images.length > 0) {
            console.log('✅ Modal test passed - images are ready');
        } else {
            console.error('❌ Modal test failed - no images found');
        }
    }

    init() {
        // Collect all gallery images
        this.collectImages();
        
        // Add click events to all gallery images
        this.addImageClickEvents();
        
        // Add modal controls
        this.addModalControls();
        
        // Add keyboard navigation
        this.addKeyboardNavigation();
    }

    collectImages() {
        const galleryImages = document.querySelectorAll('.gallery-photo');
        console.log('📸 Collecting images... Found:', galleryImages.length);
        
        this.images = Array.from(galleryImages).map((img, index) => {
            const src = img.getAttribute('src');
            const alt = img.getAttribute('alt');
            console.log(`Image ${index}: ${src} - ${alt}`);
            return {
                src: src,
                alt: alt,
                caption: this.getLoveMessage(alt)
            };
        });
        
        console.log('✅ Collected', this.images.length, 'images');
    }

    getLoveMessage(alt) {
        const loveMessages = {
            'Kỷ niệm với em': '💕 Những khoảnh khắc đẹp nhất của anh là khi được ở bên em',
            'Khoảnh khắc với em': '💖 Em làm cho mỗi ngày của anh trở nên đặc biệt',
            'Những ngày cùng em': '💗 Anh muốn cùng em tạo thêm nhiều kỷ niệm đẹp hơn nữa',
            'Kỷ niệm đáng nhớ': '💝 Mỗi kỷ niệm với em đều là kho báu quý giá nhất',
            'Khoảnh khắc hạnh phúc': '💕 Em là nguồn hạnh phúc lớn nhất trong cuộc đời anh',
            'Những ngày vui vẻ': '💖 Cùng em, mỗi ngày đều là một ngày tuyệt vời',
            'Kỷ niệm ngọt ngào': '💗 Anh sẽ nhớ mãi những khoảnh khắc ngọt ngào này',
            'Khoảnh khắc lãng mạn': '💝 Em làm cho cuộc sống anh trở nên lãng mạn',
            'Những ngày đáng nhớ': '💕 Những ngày cùng em là những ngày đáng nhớ nhất',
            'Kỷ niệm đặc biệt': '💖 Em là điều đặc biệt nhất trong cuộc đời anh',
            'Khoảnh khắc tuyệt vời': '💗 Cùng em, mọi khoảnh khắc đều tuyệt vời',
            'Những ngày hạnh phúc': '💝 Anh cảm ơn em đã mang lại hạnh phúc cho anh'
        };
        
        // Thêm một số lời yêu thương đặc biệt
        const specialMessages = [
            '💕 Em là ánh sáng trong cuộc đời anh',
            '💖 Anh yêu em nhiều hơn những gì anh có thể nói',
            '💗 Em làm cho cuộc sống anh trở nên ý nghĩa',
            '💝 Anh muốn cùng em đi đến cuối con đường',
            '💕 Em là người quan trọng nhất trong cuộc đời anh',
            '💖 Cảm ơn em đã ở bên anh',
            '💗 Em là lý do anh thức dậy mỗi sáng với nụ cười',
            '💝 Anh sẽ yêu em mãi mãi',
            '💕 Em là giấc mơ đẹp nhất của anh',
            '💖 Cùng em, mọi thứ đều có thể',
            '💗 Em là điều tuyệt vời nhất đã xảy ra với anh',
            '💝 Anh cảm ơn em đã yêu anh'
        ];
        
        return loveMessages[alt] || specialMessages[Math.floor(Math.random() * specialMessages.length)];
    }

    addImageClickEvents() {
        const galleryImages = document.querySelectorAll('.gallery-photo');
        console.log('🎯 Adding click events to', galleryImages.length, 'images');
        
        galleryImages.forEach((img, index) => {
            img.style.cursor = 'pointer';
            
            // Remove any existing event listeners
            img.removeEventListener('click', this.handleImageClick);
            
            // Add new event listener
            img.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🖱️ Image clicked:', index, img.getAttribute('src'));
                this.openModal(index);
            });
            
            console.log(`✅ Added click event to image ${index}`);
        });
        
        console.log('✅ All click events added');
    }

    addModalControls() {
        // Close modal
        this.closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Navigation buttons
        this.prevBtn.addEventListener('click', () => {
            this.showPrevious();
        });

        this.nextBtn.addEventListener('click', () => {
            this.showNext();
        });
    }

    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (this.modal.style.display === 'block') {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        this.showPrevious();
                        break;
                    case 'ArrowRight':
                        this.showNext();
                        break;
                }
            }
        });
    }

    openModal(index) {
        console.log('🚀 Opening modal for index:', index);
        console.log('📊 Total images:', this.images.length);
        
        if (index < 0 || index >= this.images.length) {
            console.error('❌ Invalid image index:', index);
            return;
        }
        
        const imageData = this.images[index];
        console.log('🖼️ Image data:', imageData);
        
        this.currentIndex = index;
        this.modalImage.src = imageData.src;
        this.modalImage.alt = imageData.alt;
        this.modalCaption.innerHTML = `<strong>${imageData.alt}</strong><br><span style="font-size: 0.9em; opacity: 0.9;">${imageData.caption}</span>`;
        
        this.modal.style.display = 'block';
        this.modal.style.opacity = '0';
        document.body.style.overflow = 'hidden';
        
        // Update navigation button states
        this.updateNavigationButtons();
        
        // Add fade in animation
        setTimeout(() => {
            this.modal.style.opacity = '1';
            console.log('✅ Modal opened successfully');
        }, 10);
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    showPrevious() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateModalImage();
        this.updateNavigationButtons();
    }

    showNext() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateModalImage();
        this.updateNavigationButtons();
    }

    updateModalImage() {
        this.modalImage.src = this.images[this.currentIndex].src;
        this.modalCaption.innerHTML = `<strong>${this.images[this.currentIndex].alt}</strong><br><span style="font-size: 0.9em; opacity: 0.9;">${this.images[this.currentIndex].caption}</span>`;
    }

    updateNavigationButtons() {
        // Show/hide navigation buttons based on image count
        if (this.images.length <= 1) {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
        } else {
            this.prevBtn.style.display = 'block';
            this.nextBtn.style.display = 'block';
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Starting website initialization...');
    
    try {
        // Initialize particle system
        new ParticleSystem();
        console.log('✅ Particle system initialized');
        
        // Initialize floating hearts
        new FloatingHearts();
        console.log('✅ Floating hearts initialized');
        
        // Initialize image modal
        new ImageModal();
        console.log('✅ Image modal initialized');
        
        // Add dynamic styles
        addDynamicStyles();
        console.log('✅ Dynamic styles added');
        
        // Initialize smooth scrolling
        initSmoothScrolling();
        console.log('✅ Smooth scrolling initialized');
        
        // Add some interactive hover effects
        addHoverEffects();
        console.log('✅ Hover effects added');
        
        // Add fallback click handlers
        addFallbackClickHandlers();
        console.log('✅ Fallback click handlers added');
        
        console.log('💕 Website xin lỗi đã được khởi tạo thành công! 💕');
    } catch (error) {
        console.error('❌ Error initializing website:', error);
    }
});

// Add hover effects to cards
function addHoverEffects() {
    const cards = document.querySelectorAll('.apology-card, .message-card, .photo-frame');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('forgive-btn') || e.target.classList.contains('hug-btn')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            if (e.target.contains(ripple)) {
                e.target.removeChild(ripple);
            }
        }, 600);
    }
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Fallback click handlers
function addFallbackClickHandlers() {
    console.log('🔄 Adding fallback click handlers...');
    
    // Wait for images to load
    setTimeout(() => {
        const galleryImages = document.querySelectorAll('.gallery-photo');
        console.log('🖼️ Fallback: Found', galleryImages.length, 'images');
        
        galleryImages.forEach((img, index) => {
            // Add click handler directly to the parent photo-item
            const photoItem = img.closest('.photo-item');
            if (photoItem) {
                photoItem.style.cursor = 'pointer';
                photoItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('🖱️ Fallback: Photo item clicked:', index);
                    openModalFallback(index);
                });
            }
        });
        
        console.log('✅ Fallback click handlers added');
    }, 2000);
}

// Fallback modal function
function openModalFallback(index) {
    console.log('🚀 Fallback: Opening modal for index:', index);
    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (!modal || !modalImage || !modalCaption) {
        console.error('❌ Fallback: Modal elements not found');
        return;
    }
    
    const galleryImages = document.querySelectorAll('.gallery-photo');
    if (index < 0 || index >= galleryImages.length) {
        console.error('❌ Fallback: Invalid index');
        return;
    }
    
    const img = galleryImages[index];
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    
    console.log('🖼️ Fallback: Image data:', { src, alt });
    
    modalImage.src = src;
    modalImage.alt = alt;
    modalCaption.innerHTML = `<strong>${alt}</strong><br><span style="font-size: 0.9em; opacity: 0.9;">💕 Anh yêu em nhiều lắm!</span>`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Fallback: Modal opened');
}
