import './styles.css'

// ── Theme Toggle ──
const themeToggle = document.getElementById('themeToggle')
const root = document.documentElement

function setTheme(theme) {
  root.setAttribute('data-theme', theme)
  localStorage.setItem('artha-theme', theme)
  if (themeToggle) {
    themeToggle.innerHTML = theme === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
  }
}

const savedTheme = localStorage.getItem('artha-theme') || 'dark'
setTheme(savedTheme)

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme')
    setTheme(current === 'dark' ? 'light' : 'dark')
  })
}

// ── Header Scroll Effect ──
const header = document.getElementById('header')
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50)
  }, { passive: true })
}

// ── Mobile Menu ──
const mobileToggle = document.getElementById('mobileToggle')
const nav = document.getElementById('nav')

if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active')
    nav.classList.toggle('open')
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : ''
  })

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active')
      nav.classList.remove('open')
      document.body.style.overflow = ''
    })
  })

  nav.querySelectorAll('.nav__item button').forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        btn.closest('.nav__item').classList.toggle('open')
      }
    })
  })
}

// ── Scroll Reveal Animations ──
const revealElements = document.querySelectorAll('.reveal')
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
revealElements.forEach(el => revealObserver.observe(el))

// ── Tabs ──
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'))
    const panel = document.getElementById(`tab-${target}`)
    if (panel) panel.classList.add('active')
  })
})

// ── Smooth Scroll for Hash Links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href')
    if (href === '#') return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ── Counter Animation ──
function animateCounters() {
  const counters = document.querySelectorAll('.hero__stat-number, .stat__number')
  counters.forEach(counter => {
    const text = counter.textContent
    const match = text.match(/(\d+)/)
    if (!match) return
    const target = parseInt(match[1])
    const suffix = text.replace(match[1], '')
    const duration = 2000

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = Date.now()
        function update() {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          counter.textContent = Math.floor(eased * target) + suffix
          if (progress < 1) requestAnimationFrame(update)
        }
        update()
        observer.unobserve(counter)
      }
    }, { threshold: 0.5 })
    observer.observe(counter)
  })
}
animateCounters()

// ── Search Functionality ──
const searchData = [
  { title: 'Artha Advantage', desc: 'Accelerators, Data Insights Platform, MDM Lite, Customer 360', url: '/artha-advantage.html' },
  { title: 'Artificial Intelligence', desc: 'AI Data Readiness, Intelligent Decisions, Workflow Automation', url: '/solutions.html#ai' },
  { title: 'Data Solutions', desc: 'Data Strategy, MDM, Enterprise Data Management, Analytics', url: '/solutions.html#data-solutions' },
  { title: 'SAP Solutions', desc: 'SAP Migration, Data Cleansing, S/4HANA, Data Replication', url: '/solutions.html#sap' },
  { title: 'Data Governance', desc: 'GDPR, CCPA, HIPAA Compliance, Data Privacy & Security', url: '/solutions.html#governance' },
  { title: 'Cloud Services', desc: 'AWS, Azure, Snowflake, Cloud Consulting', url: '/solutions.html#cloud' },
  { title: 'Managed Services', desc: '24/7 Support, Server Management, Application Management', url: '/solutions.html#managed' },
  { title: 'Manufacturing', desc: 'Boost efficiency and innovation with data analytics', url: '/industries.html#manufacturing' },
  { title: 'Healthcare', desc: 'Unified healthcare data for better patient outcomes', url: '/industries.html#healthcare' },
  { title: 'BFSI', desc: 'Data governance, security, and compliance for banking', url: '/industries.html#bfsi' },
  { title: 'Retail', desc: 'Real-time retail data for optimized operations', url: '/industries.html#retail' },
  { title: 'About Us', desc: 'Artha Solutions – Quality, Integrity & Trust', url: '/about.html' },
  { title: 'Contact Us', desc: 'Global offices, phone numbers, and inquiry form', url: '/contact.html' },
  { title: 'Events', desc: 'Upcoming events, conferences, and webinars', url: '/resources.html#events' },
  { title: 'Blogs', desc: 'Latest industry insights and hot topics', url: '/resources.html#blogs' },
  { title: 'Case Studies', desc: 'Customer success stories powered by Artha', url: '/resources.html#case-studies' },
  { title: 'White Papers', desc: 'Expert insights and research reports', url: '/resources.html#whitepapers' },
  { title: 'Partners', desc: 'Talend, Qlik, AWS, Azure, Snowflake, Alation', url: '/about.html#partners' },
  { title: 'Careers', desc: 'Join our dynamic team of data experts', url: '/about.html#careers' },
]

const searchModal = document.getElementById('searchModal')
const searchInput = document.getElementById('searchInput')
const searchResults = document.getElementById('searchResults')
const searchBtn = document.getElementById('searchBtn')

if (searchBtn && searchModal) {
  searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active')
    setTimeout(() => searchInput && searchInput.focus(), 100)
  })

  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.classList.remove('active')
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchModal.classList.remove('active')
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      searchModal.classList.toggle('active')
      if (searchModal.classList.contains('active')) {
        setTimeout(() => searchInput && searchInput.focus(), 100)
      }
    }
  })
}

if (searchInput && searchResults) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim()
    if (q.length < 2) { searchResults.innerHTML = ''; return }

    const matches = searchData.filter(item =>
      item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
    )

    searchResults.innerHTML = matches.length
      ? matches.map(m => `
        <a href="${m.url}" class="search-result-item">
          <strong>${m.title}</strong>
          ${m.desc}
        </a>
      `).join('')
      : '<div style="padding:1rem;color:var(--text-muted);text-align:center;">No results found</div>'
  })
}

// ── Admin Image Loader ──
function loadAdminImages() {
  const images = JSON.parse(localStorage.getItem('artha-admin-images') || '{}')
  Object.keys(images).forEach(key => {
    document.querySelectorAll(`[data-img-key="${key}"]`).forEach(el => {
      const img = document.createElement('img')
      img.src = images[key]
      img.alt = key
      el.textContent = ''
      el.appendChild(img)
    })
  })
}
loadAdminImages()

// ── Scroll to Hash on Page Load ──
if (window.location.hash) {
  setTimeout(() => {
    const el = document.querySelector(window.location.hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 200)
}
