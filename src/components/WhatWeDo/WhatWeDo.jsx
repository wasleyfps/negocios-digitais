'use client'

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import {motion} from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from "@/src/utils/animation";
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* head of section */}
          <div className="wwd-head">
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="tag">O que nós fazemos</motion.span>
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="title">
              {" "}
              Capacitando fundadores com capital não dilutivo e experiência em
              execução
            </motion.span>
            <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="des"> Aqui está como podemos avaliar </motion.span>
          </div>
          {/* two blocks */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
              <span className="sec-title">Avanços</span>
              <span className="text">
                Financiar despesas recorrentes de crescimento, por exemplo,
                aquisição de clientes
              </span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <div className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
              <span className="sec-title">Futuro</span>
              <span className="text">
                Financie itens únicos para dimensionar, por exemplo, produto,
                contratação
              </span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <div className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Support block */}
          <motion.div className="wwd-support"
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3)}
          >
            {/* left side */}
            <div>
              <span className="sec-title">Apoio ao seu crescimento</span>
              <span className="des">
                Insights de dados e conhecimento completo para impulsionar o
                crescimento
              </span>
            </div>
            {/* right side */}
            <div>
              <span className="text">
                Insights de dados acionáveis conectando plataformas de receita,
                marketing e mídia social
              </span>
              <span className="text">
                Experiência em execução sob demanda com divisão de custos ou
                receitas em design de propostas, engenharia, análise de
                marketing, parcerias, marca, propriedade intelectual, expansão
                de mercado, gestão de talentos.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
