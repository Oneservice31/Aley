import sys
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication, QMainWindow, QToolBar, QLineEdit, QAction
from PyQt5.QtWebEngineWidgets import QWebEngineView
class Browser(QMainWindow):
    def init(self):
        super().init()
        self.setWindowTitle('One browser')
        self.setGeometry(200, 200, 800, 600)
        self.browser = QWebEngineView()
        self.setCentralWidget(self.browser)
        self.browser.setUrl(QUrl('https://www.google.com'))
        toolbar = QToolBar("Araç Çubuğu")
        self.addToolBar(toolbar)
        self.url_bar = QLineEdit()
        self.url_bar.returnPressed.connect(self.navigate_to_url)
        toolbar.addWidget(self.url_bar)
        go_action = QAction("Axtar", self)
        go_action.triggered.connect(self.navigate_to_url)
        toolbar.addAction(go_action)
        back_action = QAction("Geri", self)
        back_action.triggered.connect(self.browser.back)
        toolbar.addAction(back_action)
        forward_action = QAction("İləri", self)
        forward_action.triggered.connect(self.browser.forward)
        toolbar.addAction(forward_action)
        reload_action = QAction("Yenilə", self)
        reload_action.triggered.connect(self.browser.reload)
        toolbar.addAction(reload_action)
    def navigate_to_url(self):
        url = self.url_bar.text()
        if not url.startswith("http"):
            url = "http://" + url
        self.browser.setUrl(QUrl(url))
if name == 'main':
    uygulama = QApplication(sys.argv)
    ana_pencere = Browser()
    ana_pencere.show()
    sys.exit(uygulama.exec_())

