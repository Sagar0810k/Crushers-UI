document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
      const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
      const tabPanes = tabsContainer.querySelectorAll('.tab-pane');
      const tabIndicator = tabsContainer.querySelector('.tab-indicator');
      
      const activeTab = tabsContainer.querySelector('.tab-btn.active');
      if (activeTab && tabIndicator) {
        updateTabIndicator(activeTab, tabIndicator);
      }
      
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));
          
          button.classList.add('active');
          document.getElementById(tabId).classList.add('active');
          
          if (tabIndicator) {
            updateTabIndicator(button, tabIndicator);
          }
        });
      });
    });
    
    function updateTabIndicator(activeTab, indicator) {
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      
      indicator.style.width = `${tabWidth}px`;
      indicator.style.left = `${tabLeft}px`;
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.tabs').forEach(tabsContainer => {
      const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
      const tabPanes = tabsContainer.querySelectorAll('.tab-pane');
      const tabIndicator = tabsContainer.querySelector('.tab-indicator');
      
    
      const activeTab = tabsContainer.querySelector('.tab-btn.active');
      if (activeTab) {
        if (tabIndicator) {
          updateTabIndicator(activeTab, tabIndicator);
        }
    
        if (tabsContainer.classList.contains('tabs-vertical')) {
          updateVerticalTabIndicator(activeTab);
        }
      }
      
    
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          
    
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabPanes.forEach(pane => pane.classList.remove('active'));
          
    
          button.classList.add('active');
          document.getElementById(tabId).classList.add('active');
          
    
          if (tabIndicator) {
            updateTabIndicator(button, tabIndicator);
          }
          
    
          if (tabsContainer.classList.contains('tabs-vertical')) {
            updateVerticalTabIndicator(button);
          }
          
    
          if (tabsContainer.classList.contains('tabs-animated-line')) {
            updateTabIndicator(button, tabIndicator);
          }
          
    
          if (tabsContainer.classList.contains('tabs-gradient')) {
            button.style.color = 'white';
            button.style.fontWeight = '500';
          }
        });
      });
    });
    
    function updateTabIndicator(activeTab, indicator) {
      const tabWidth = activeTab.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      
      indicator.style.width = `${tabWidth}px`;
      indicator.style.left = `${tabLeft}px`;
    }
    
    
    function updateVerticalTabIndicator(activeTab) {
    
      const existingIndicator = activeTab.parentElement.querySelector('.vertical-indicator');
      if (existingIndicator) {
        existingIndicator.remove();
      }
      
      const indicator = document.createElement('div');
      indicator.className = 'vertical-indicator';
      activeTab.appendChild(indicator);
    }
  });
