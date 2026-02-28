import { plugins } from '@/data/plugins'
import PluginCard from './PluginCard'

export default function PluginsSection() {
  return (
    <section className="section" id="plugins">
      <div className="container">
        <div className="section__header">
          <p className="section__label">— catalogue</p>
          <h2 className="section__title">Plugins</h2>
        </div>

        <div className="plugins-grid">
          {plugins.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </div>
      </div>
    </section>
  )
}
