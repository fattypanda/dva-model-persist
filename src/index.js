import dva from 'dva';
import { persistEnhancer } from './utils/dva-model-persist';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
  extraEnhancers: [
    persistEnhancer()
  ],
});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
