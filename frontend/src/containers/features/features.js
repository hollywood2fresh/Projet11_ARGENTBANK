import React from 'react'
import './features.scss'

import { featuresData } from '../../data/featuresData'
import Feature from '../../components/feature/feature'

export default function Features() {
    return (
      <section className="features">
              <h2 className="sr-only">Features</h2>
              { featuresData.map(item => (
                  <Feature 
                      key= { item.image }
                      image= { item.image }
                      title= { item.title }
                      description= { item.description }
                  />
              ))}
      </section>
    )
  }
  