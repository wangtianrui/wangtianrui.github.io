/* =====================================================================
 *  publications.js — 论文数据
 *
 *  每条论文支持的字段：
 *    year        : 数字，发表/收录年份
 *    title       : 论文标题（英文）
 *    authors     : 作者列表（字符串，沿用 Scholar 缩写）
 *    venue_en    : 英文 venue
 *    venue_zh    : 中文 venue
 *    type        : 'journal' | 'conference' | 'preprint'
 *    first       : true = 王天锐为第一作者（含共同一作）
 *    highlight   : 可选徽章，如 "Spotlight"、"Oral / Top 5%"、"DNS Challenge 5th"
 *
 *    --- 下面是跟链接/摘要相关的字段，都是可选的 ---
 *    paper_url   : 论文正式页面 URL（DOI/IEEE/ACL Anthology/ISCA 等）
 *                  如果不填，main.js 会按 doi > arxiv > Scholar 搜索 兜底
 *    doi         : 论文 DOI（形如 "10.1109/TASLP.2023.3284522"）
 *    arxiv       : 论文 arXiv id（形如 "2305.16107"）
 *    code_url    : 代码仓库（GitHub 等）
 *    demo_url    : Demo 页面（站内路径用 "../wescon/" 这种相对地址）
 *    abstract    : 论文摘要（英文原文或中文皆可），用于"Abstract"按钮展开
 *
 *  增加新论文：直接在数组末尾按相同结构 push 即可；
 *  字段只填你有的即可，其余留空，main.js 会自动兜底。
 * ===================================================================== */

const PUBLICATIONS = [
  /* ====================== 2026 ====================== */
  {
    year: 2026,
    title: "Evaluating the Expressive Appropriateness of Speech in Rich Contexts",
    authors: "Tianrui Wang, et al.",
    venue_en: "ACL 2026 (Annual Meeting of the Association for Computational Linguistics, Oral, Top 5%)",
    venue_zh: "ACL 2026 计算语言学顶会（Oral，Top 5%）",
    type: "conference",
    first: true,
    highlight: "Oral / Top 5%",
    demo_url: "../ceaeval/",
    abstract: "We propose CEAEval, the first framework for evaluating the expressive appropriateness of speech in rich contexts. Our model assesses speech expressiveness along multiple dimensions — emotion, prosody, pitch, sound effects, rhythm, and non-verbal expressions — relative to a given context. We also release: (1) 14 hours of finely human-annotated real speech with rich context and per-utterance appropriateness scores, and (2) 2,500 hours of contextualized real speech with Qwen3-Omni-Captioner weak labels."
  },
  {
    year: 2026,
    title: "Evaluating Bias in Spoken Dialogue LLMs for Real-World Decisions and Recommendations",
    authors: "Y Wu, T Wang, Y Peng, YW Chao, X Zhuang, X Wang, S Yin, Z Ma",
    venue_en: "ICASSP 2026 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2026 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2026,
    title: "InstructAudio: Unified Speech and Music Generation with Natural Language Instruction",
    authors: "C Qiang, K Yin, X Wang, Y Liang, J Zhao, R Fu, T Wang, C Gong, et al.",
    venue_en: "ICASSP 2026 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2026 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2026,
    title: "Multiple Self-Supervised Representations Fusion Network for Automatic Song Aesthetics Evaluation",
    authors: "Z Yang, X Lu, T Wang, C Gong, C Qiang, S Liu, X Zhang, C Zhang, X Li",
    venue_en: "ICASSP 2026 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2026 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2026,
    title: "AudioRAG: A Challenging Benchmark for Audio Reasoning and Information Retrieval",
    authors: "J Lin, C Zhang, T Wang, H Li",
    venue_en: "arXiv preprint arXiv:2602.10656",
    venue_zh: "arXiv 预印本 arXiv:2602.10656",
    type: "preprint",
    first: false,
    arxiv: "2602.10656",
    abstract: "Due to recent advancements in Large Audio-Language Models (LALMs) that demonstrate remarkable performance across a range of sound-, speech- and music-related tasks, there is a growing demand for more challenging benchmarks. AudioRAG introduces a benchmark for audio reasoning and information retrieval, designed to evaluate whether LALMs can retrieve and reason over audio knowledge in a RAG-style setting."
  },
  {
    year: 2026,
    title: "UniSonate: A Unified Model for Speech, Music, and Sound Effect Generation with Text Instructions",
    authors: "C Qiang, X Wang, K Yin, Y Liang, Y Guo, T Ma, Z Zhang, T Wang, C Gong, et al.",
    venue_en: "arXiv preprint arXiv:2604.22209",
    venue_zh: "arXiv 预印本 arXiv:2604.22209",
    type: "preprint",
    first: false,
    arxiv: "2604.22209",
    abstract: "Generative audio modeling has largely been fragmented into specialized tasks — text-to-speech (TTS), text-to-music (TTM), and text-to-audio (TTA) — each operating under heterogeneous data and objectives. UniSonate proposes a unified generative model that handles speech, music, and sound-effect generation with natural-language instructions, showing strong cross-domain transfer."
  },
  {
    year: 2026,
    title: "MSR-HuBERT: Self-supervised Pre-training for Adaptation to Multiple Sampling Rates",
    authors: "Z Huang, M Ge, T Wang, X Li, X Wang, L Wang, J Dang",
    venue_en: "arXiv preprint arXiv:2603.23048",
    venue_zh: "arXiv 预印本 arXiv:2603.23048",
    type: "preprint",
    first: false,
    arxiv: "2603.23048",
    abstract: "Self-supervised learning (SSL) has advanced speech processing. However, existing SSL methods typically assume a single sampling rate and struggle with mixed-rate data. MSR-HuBERT extends HuBERT-style pre-training to handle multiple sampling rates, improving generalization across heterogeneous data sources."
  },
  {
    year: 2026,
    title: "Prosodic Boundary-Aware Streaming Generation for LLM-Based TTS with Streaming Text Input",
    authors: "C Liu, T Wang, Y Ni, Y Peng, ES Chng",
    venue_en: "arXiv preprint arXiv:2603.06444",
    venue_zh: "arXiv 预印本 arXiv:2603.06444",
    type: "preprint",
    first: false,
    arxiv: "2603.06444",
    abstract: "Streaming TTS that receives streaming text is essential for interactive systems, yet it suffers from unnatural prosody due to missing lookahead and long-form artifacts. We propose a prosodic-boundary-aware streaming generation framework for LLM-based TTS with streaming text input, improving prosody quality while preserving low latency."
  },

  /* ====================== 2025 ====================== */
  {
    year: 2025,
    title: "Word-Level Emotional Expression Control in Zero-Shot Text-to-Speech Synthesis",
    authors: "Tianrui Wang, H Wang, M Ge, C Gong, C Qiang, Z Ma, Z Huang, G Yang, et al.",
    venue_en: "NeurIPS 2025 (Spotlight) - Annual Conference on Neural Information Processing Systems",
    venue_zh: "NeurIPS 2025 神经信息处理系统大会（Spotlight）",
    type: "conference",
    first: true,
    highlight: "Spotlight",
    code_url: "https://github.com/CCA-Lab/VocalStory/tree/main/wescon",
    demo_url: "../wescon/",
    abstract: "We propose WeScon, a novel multi-round reasoning + self-training framework that achieves word-level emotion and speed control for zero-shot TTS without requiring emotion-labeled data. By introducing dynamic emotional attention bias and a transition-smoothing mechanism, WeScon generates natural and expressive speech while preserving the original zero-shot capability, achieving state-of-the-art word-level emotional controllability."
  },
  {
    year: 2025,
    title: "A Progressive Generation Framework with Speech Pre-trained Model for Expressive Voice Conversion",
    authors: "Tianrui Wang, M Ge, Z Niu, C Gong, C Qiang, H Wang, Z Huang, Z Ma, X Wang, et al.",
    venue_en: "ICME 2025 - IEEE International Conference on Multimedia and Expo (CCF-B)",
    venue_zh: "ICME 2025 IEEE 国际多媒体与博览会议（CCF-B 类）",
    type: "conference",
    first: true,
    demo_url: "../pm_evc_icme/",
    abstract: "We present a three-stage expressive voice-conversion framework that leverages the disentangling ability of speech pre-trained models to progressively integrate text, emotion, speaker, and acoustic information. Compared with non-progressive counterparts, the progressive design better exploits the relationships among disentangled factors and yields more natural emotion and speaker conversion."
  },
  {
    year: 2025,
    title: "Time-Graph Frequency Representation with Singular Value Decomposition for Neural Speech Enhancement",
    authors: "Tianrui Wang, T Wang, M Ge, Q Zhang, Z Ge, Z Yang",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: true
  },
  {
    year: 2025,
    title: "A Learning Time-Graph Frequency Representation for Monaural Speech Enhancement",
    authors: "Tianrui Wang, T Wang, M Ge, Q Zhang, X Shao",
    venue_en: "IEEE Transactions on Audio, Speech and Language Processing",
    venue_zh: "IEEE 音频、语音与语言处理汇刊（语音领域顶刊）",
    type: "journal",
    first: true
  },
  {
    year: 2025,
    title: "Characteristic-Specific Partial Fine-Tuning for Efficient Emotion and Speaker Adaptation in Codec Language Text-to-Speech Models",
    authors: "Tianrui Wang, M Ge, C Gong, C Qiang, H Wang, Z Huang, Y Jiang, X Wang, et al.",
    venue_en: "Submitted to Speech Communication (CCF-B)",
    venue_zh: "投稿至 Speech Communication（CCF-B 类期刊）",
    type: "journal",
    first: true,
    arxiv: "2501.14273",
    abstract: "We propose a characteristic-specific partial fine-tuning method that efficiently adapts general-purpose codec-based TTS models to specific emotion and speaker characteristics. By analyzing the per-layer contribution of transformer blocks to emotion vs. speaker control, we significantly improve adaptation quality while mitigating catastrophic forgetting. We further explore using TTS models as encoders for speech-emotion and speaker recognition."
  },
  {
    year: 2025,
    title: "EmoVoice: LLM-based Emotional Text-to-Speech Model with Freestyle Text Prompting",
    authors: "G Yang, C Yang, Q Chen, Z Ma, W Chen, W Wang, T Wang, Y Yang, Z Niu, et al.",
    venue_en: "ACM MM 2025 - Proceedings of the 33rd ACM International Conference on Multimedia",
    venue_zh: "ACM MM 2025 第33届 ACM 国际多媒体会议",
    type: "conference",
    first: false,
    arxiv: "2504.12867",
    doi: "10.1145/3746027.3754829"
  },
  {
    year: 2025,
    title: "Mamba-SEUNet: Mamba UNet for Monaural Speech Enhancement",
    authors: "J Wang, Z Lin, T Wang, M Ge, L Wang, J Dang",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "VQ-CTAP: Cross-Modal Fine-Grained Sequence Representation Learning for Speech Processing",
    authors: "C Qiang, W Geng, Y Zhao, R Fu, T Wang, C Gong, T Wang, Q Liu, J Yi, et al.",
    venue_en: "IEEE Transactions on Audio, Speech and Language Processing",
    venue_zh: "IEEE 音频、语音与语言处理汇刊（语音领域顶刊）",
    type: "journal",
    first: false
  },
  {
    year: 2025,
    title: "Adapting Whisper for Code-Switching through Encoding Refining and Language-Aware Decoding",
    authors: "J Zhao, H Shi, C Cui, T Wang, H Liu, Z Ni, L Ye, L Wang",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "Reducing the Gap between Pretrained Speech Enhancement and Recognition Models Using a Real Speech-Trained Bridging Module",
    authors: "Z Cui, C Cui, T Wang, M He, H Shi, M Ge, C Gong, L Wang, J Dang",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "Discrete Unit-based Low-latency Multi-lingual Speech Synthesis for LIMMITS'25 Challenge",
    authors: "Y Jiang, C Gong, T Wang, C Qiang, H Wang, Q Liu, Y Lu, X Wang, et al.",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "A Chinese Expressive Long-dialogue Speech Dataset with Scripts",
    authors: "J Li, T Wang, M Ge, C Cui, J Zhao, J Wang, L Wang, J Dang",
    venue_en: "ICASSP 2025 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2025 国际声学语音与信号处理会议",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "Augment Mandarin to Cantonese Speech Databases via Retrieval-Augmented Generation and Speech Synthesis",
    authors: "F Liu, C Gong, B Zhu, R Jing, C Qiang, T Wang, XL Zhang, X Li",
    venue_en: "Proc. Interspeech 2025",
    venue_zh: "Interspeech 2025 国际语音通信协会年会",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "A Three-Stage Beamforming with Harmonic Guidance for Multi-Channel Speech Enhancement",
    authors: "N Alip, T Wang, R Cao, M Ge, J Lin, L Wang, J Dang",
    venue_en: "Proc. Interspeech 2025",
    venue_zh: "Interspeech 2025 国际语音通信协会年会",
    type: "conference",
    first: false
  },
  {
    year: 2025,
    title: "Emotional Style Transfer with Intensity Control in Zero-Shot TTS",
    authors: "H Wang, C Qiang, T Wang, C Gong, L Wang",
    venue_en: "IEEE Signal Processing Letters",
    venue_zh: "IEEE 信号处理快报",
    type: "journal",
    first: false
  },
  {
    year: 2025,
    title: "Multi-channel Speech Enhancement Network Based on Speech Harmonic Structures",
    authors: "A Nurali, R Cao, J Li, M Ge, T Wang, H Wang, Z Cui, L Wang, et al.",
    venue_en: "Journal of Tsinghua University (Science and Technology), 65(7), 1328-1335",
    venue_zh: "清华大学学报（自然科学版），65(7), 1328-1335",
    type: "journal",
    first: false
  },
  {
    year: 2025,
    title: "LORT: Locally Refined Convolution and Taylor Transformer for Monaural Speech Enhancement",
    authors: "J Wang, Z Lin, T Wang, M Ge, L Wang, J Dang",
    venue_en: "Speech Communication",
    venue_zh: "Speech Communication（CCF-B 期刊）",
    type: "journal",
    first: false
  },
  {
    year: 2025,
    title: "Expressive Prompting: Improving Emotion Intensity and Speaker Consistency in Zero-Shot TTS",
    authors: "H Wang, C Qiang, T Wang, C Gong, Y Jiang, Y Lu, C Zhang, L Wang, et al.",
    venue_en: "APSIPA ASC 2025 - Asia Pacific Signal and Information Processing Association Annual Summit",
    venue_zh: "APSIPA ASC 2025 亚太信号与信息处理协会年会",
    type: "conference",
    first: false,
    arxiv: "2409.18512",
    abstract: "Recent advancements in speech synthesis have enabled LLM-based zero-shot TTS. Expressive Prompting improves emotion intensity and speaker consistency in zero-shot TTS by crafting expressive style prompts and a prompt-selection strategy, producing more vivid yet speaker-consistent outputs."
  },
  {
    year: 2025,
    title: "MMAR: A Challenging Benchmark for Deep Reasoning in Speech, Audio, Music, and Their Mix",
    authors: "Z Ma, Y Ma, Y Zhu, C Yang, YW Chao, R Xu, W Chen, Y Chen, Z Chen, T Wang, et al.",
    venue_en: "arXiv preprint arXiv:2505.13032",
    venue_zh: "arXiv 预印本 arXiv:2505.13032",
    type: "preprint",
    first: false,
    arxiv: "2505.13032",
    abstract: "We introduce MMAR, a new benchmark designed to evaluate the deep reasoning capabilities of Audio-Language Models (ALMs) across massive multi-disciplinary tasks. MMAR comprises 1,000 audio-question-answer triplets spanning speech, audio, music, and their mixtures, covering complex and fine-grained reasoning."
  },
  {
    year: 2025,
    title: "Perturbation Self-Supervised Representations for Cross-Lingual Emotion TTS: Stage-Wise Modeling of Emotion and Speaker",
    authors: "C Gong, C Qiang, T Wang, Y Jiang, Y Lu, R Jing, X Miao, X Zhang, et al.",
    venue_en: "arXiv preprint arXiv:2510.11124",
    venue_zh: "arXiv 预印本 arXiv:2510.11124",
    type: "preprint",
    first: false,
    arxiv: "2510.11124",
    abstract: "Cross-lingual emotional TTS aims to produce speech in one language that captures the emotion of a speaker from another language while maintaining the target voice. We propose a perturbation-based self-supervised representation that stage-wise models emotion and speaker factors, improving cross-lingual emotional transfer."
  },
  {
    year: 2025,
    title: "ASDA: Audio Spectrogram Differential Attention Mechanism for Self-Supervised Representation Learning",
    authors: "J Wang, T Wang, M Ge, L Wang, J Dang",
    venue_en: "arXiv preprint arXiv:2507.02666",
    venue_zh: "arXiv 预印本 arXiv:2507.02666",
    type: "preprint",
    first: false,
    arxiv: "2507.02666",
    abstract: "In audio self-supervised representation learning, the standard Transformer attention tends to smear attention across irrelevant regions. ASDA introduces a differential attention mechanism specialized for audio spectrograms, yielding cleaner attention and better downstream performance."
  },
  {
    year: 2025,
    title: "SecoustiCodec: Cross-Modal Aligned Streaming Single-Codecbook Speech Codec",
    authors: "C Qiang, H Wang, C Gong, T Wang, R Fu, T Wang, R Chen, J Yi, Z Wen, et al.",
    venue_en: "arXiv preprint arXiv:2508.02849",
    venue_zh: "arXiv 预印本 arXiv:2508.02849",
    type: "preprint",
    first: false,
    arxiv: "2508.02849",
    abstract: "Speech codecs serve as a crucial bridge in unifying speech and text language models. SecoustiCodec addresses challenges in semantic encoding (residual paralinguistic leakage, cross-modal misalignment) and proposes a streaming single-codebook codec with cross-modal alignment."
  },
  {
    year: 2025,
    title: "Pay More Attention To Audio: Mitigating Imbalance of Cross-Modal Attention in Large Audio Language Models",
    authors: "J Wang, Z Ma, Z Luo, T Wang, M Ge, X Wang, L Wang",
    venue_en: "arXiv preprint arXiv:2509.18816",
    venue_zh: "arXiv 预印本 arXiv:2509.18816",
    type: "preprint",
    first: false,
    arxiv: "2509.18816",
    abstract: "Large Audio-Language Models often suffer from audio-textual attention imbalance, prioritizing text over acoustic information — particularly in fusion layers. We propose mechanisms to explicitly rebalance cross-modal attention, improving audio grounding and downstream task performance."
  },
  {
    year: 2025,
    title: "POTSA: A Cross-Lingual Speech Alignment Framework for Low Resource Speech-to-Text Translation",
    authors: "X Li, C Cui, T Wang, M Ge, Z Huang, J Li, Y Peng, L Wang, J Dang, et al.",
    venue_en: "arXiv preprint arXiv:2511.09232",
    venue_zh: "arXiv 预印本 arXiv:2511.09232",
    type: "preprint",
    first: false,
    arxiv: "2511.09232",
    abstract: "Speech LLMs have made breakthroughs in multilingual speech-to-text translation, but existing approaches often overlook semantic commonalities across source languages. POTSA proposes a cross-lingual speech alignment framework that improves low-resource speech-to-text translation."
  },

  /* ====================== 2024 ====================== */
  {
    year: 2024,
    title: "Progressive Residual Extraction based Pre-training for Speech Representation Learning (ProgRE)",
    authors: "Tianrui Wang, J Li, Z Ma, R Cao, X Chen, L Wang, M Ge, X Wang, Y Wang, J Dang, N Tashi",
    venue_en: "IEEE Transactions on Audio, Speech and Language Processing",
    venue_zh: "IEEE 音频、语音与语言处理汇刊（语音领域顶刊）",
    type: "journal",
    first: true,
    doi: "10.1109/TASLPRO.2025.3564118",
    arxiv: "2409.00387",
    code_url: "https://github.com/CCA-Lab/ProgRE",
    demo_url: "../progre_vc/",
    abstract: "We introduce speech-disentanglement into SSL pre-training and propose a progressive residual extraction strategy. Without additional labels, the pre-trained model gradually extracts pitch, speaker, and content information from speech, simultaneously boosting performance on a wide range of downstream tasks and surpassing WavLM."
  },
  {
    year: 2024,
    title: "EmoPro: A Prompt Selection Strategy for Emotional Expression in LM-based Speech Synthesis",
    authors: "H Wang, C Qiang, T Wang, C Gong, Q Liu, Y Jiang, X Wang, C Wang, et al.",
    venue_en: "arXiv preprint arXiv:2409.18512",
    venue_zh: "arXiv 预印本 arXiv:2409.18512",
    type: "preprint",
    first: false,
    arxiv: "2409.18512"
  },
  {
    year: 2024,
    title: "VoiCor: A Residual Iterative Voice Correction Framework for Monaural Speech Enhancement",
    authors: "R Cao, T Wang, M Ge, A Li, L Wang, J Dang, Y Jia",
    venue_en: "Proc. Interspeech 2024",
    venue_zh: "Interspeech 2024 国际语音通信协会年会",
    type: "conference",
    first: false
  },
  {
    year: 2024,
    title: "Expressive Text-to-Speech with Contextual Background for ICAGC 2024",
    authors: "Y Jiang, T Wang, H Wang, C Gong, Q Liu, Z Huang, L Wang, J Dang",
    venue_en: "ISCSLP 2024 - International Symposium on Chinese Spoken Language Processing",
    venue_zh: "ISCSLP 2024 中文口语语言处理国际研讨会",
    type: "conference",
    first: false
  },
  {
    year: 2024,
    title: "Expressive Speech Synthesis with Theme-Oriented Few-Shot Learning in ICAGC 2024",
    authors: "H Wang, T Wang, C Gong, Y Jiang, Q Liu, L Wang, J Dang",
    venue_en: "ISCSLP 2024 - International Symposium on Chinese Spoken Language Processing",
    venue_zh: "ISCSLP 2024 中文口语语言处理国际研讨会",
    type: "conference",
    first: false
  },

  /* ====================== 2023 ====================== */
  {
    year: 2023,
    title: "VioLA: Conditional Language Models for Speech Recognition, Synthesis, and Translation",
    authors: "Tianrui Wang, L Zhou, Z Zhang, Y Wu, S Liu, Y Gaur, Z Chen, J Li, F Wei",
    venue_en: "IEEE Transactions on Audio, Speech and Language Processing (preprint: arXiv:2305.16107)",
    venue_zh: "IEEE 音频、语音与语言处理汇刊（语音领域顶刊；预印本 arXiv:2305.16107）",
    type: "journal",
    first: true,
    doi: "10.1109/TASLP.2024.3434425",
    arxiv: "2305.16107",
    abstract: "Recent research shows convergence in model architecture, training objectives, and inference methods across modalities. We propose VioLA, a single auto-regressive Transformer decoder-only network that unifies cross-modal speech/text tasks — ASR, MT, TTS, S2T translation, and S2S translation. VioLA achieves strong performance across all five tasks under a unified framework."
  },
  {
    year: 2023,
    title: "Harmonic Attention for Monaural Speech Enhancement",
    authors: "Tianrui Wang, W Zhu, Y Gao, S Zhang, J Feng",
    venue_en: "IEEE/ACM Transactions on Audio, Speech, and Language Processing, 31, 2424-2436",
    venue_zh: "IEEE/ACM 音频、语音与语言处理汇刊，31, 2424-2436（语音领域顶刊）",
    type: "journal",
    first: true,
    doi: "10.1109/TASLP.2023.3284522",
    abstract: "We propose a Harmonic Attention mechanism that models and compensates harmonics via their comb-like structure and high-energy properties. Combined with a progressive enhancement strategy that preserves acoustic structure (HAPNet) and a loudness-power-compression auditory loss that aligns with human perception, the method delivers superior enhancement with reduced distortion."
  },
  {
    year: 2023,
    title: "An Adapter Based Multi-Label Pre-Training for Speech Separation and Enhancement",
    authors: "Tianrui Wang, X Chen, Z Chen, S Yu, W Zhu",
    venue_en: "ICASSP 2023 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2023 国际声学语音与信号处理会议",
    type: "conference",
    first: true,
    doi: "10.1109/ICASSP49357.2023.10094883",
    arxiv: "2211.06041",
    abstract: "We propose an adapter-based multi-label pre-training strategy that introduces enhancement and separation objectives into speech pre-training, alleviating domain and task mismatches. The adapter design lets the model learn new tasks while preserving the performance of the original tasks such as ASR."
  },
  {
    year: 2023,
    title: "On Decoder-Only Architecture for Speech-to-Text and Large Language Model Integration",
    authors: "J Wu, Y Gaur, Z Chen, L Zhou, Y Zhu, T Wang, J Li, S Liu, B Ren, L Liu, Y Wu",
    venue_en: "ASRU 2023 - IEEE Automatic Speech Recognition and Understanding Workshop",
    venue_zh: "ASRU 2023 IEEE 自动语音识别与理解研讨会",
    type: "conference",
    first: false,
    doi: "10.1109/ASRU57964.2023.10389705",
    arxiv: "2307.03917"
  },
  {
    year: 2023,
    title: "A Refining Underlying Information Framework for Monaural Speech Enhancement",
    authors: "R Cao, T Wang, M Ge, L Wang, J Dang",
    venue_en: "arXiv preprint arXiv:2312.11201",
    venue_zh: "arXiv 预印本 arXiv:2312.11201",
    type: "preprint",
    first: false,
    arxiv: "2312.11201",
    code_url: "https://github.com/caoruitju/RUI_SE",
    abstract: "Supervised speech enhancement benefits from neural networks' ability to fit diverse representations. By bridging speech enhancement and the Information Bottleneck principle, we propose a plug-and-play Refining Underlying Information (RUI) framework that consistently improves various SE backbones."
  },
  {
    year: 2023,
    title: "Noise-robust Pitch Detection Based on Super-Resolution Harmonics",
    authors: "D Zhu, W Zhu, T Wang, Y Gao, J Feng, S Zhang",
    venue_en: "APSIPA ASC 2023 - Asia Pacific Signal and Information Processing Association Annual Summit",
    venue_zh: "APSIPA ASC 2023 亚太信号与信息处理协会年会",
    type: "conference",
    first: false,
    doi: "10.1109/APSIPAASC58517.2023.10317312"
  },

  /* ====================== 2022 ====================== */
  {
    year: 2022,
    title: "HGCN: Harmonic Gated Compensation Network for Speech Enhancement",
    authors: "Tianrui Wang, W Zhu, Y Gao, J Feng, S Zhang",
    venue_en: "ICASSP 2022 - IEEE International Conference on Acoustics, Speech and Signal Processing",
    venue_zh: "ICASSP 2022 国际声学语音与信号处理会议",
    type: "conference",
    first: true,
    doi: "10.1109/ICASSP43922.2022.9747521",
    arxiv: "2201.12755",
    code_url: "https://github.com/wangtianrui/HGCN",
    abstract: "We propose a Harmonic Gated Compensation Network (HGCN) with a high-resolution harmonic integral spectrum that accurately predicts harmonic positions under limited frequency resolution. A deep model then compensates harmonic amplitudes guided by these positions, yielding both real-time capability and notable enhancement improvements."
  },
  {
    year: 2022,
    title: "Harmonic Gated Compensation Network Plus for ICASSP 2022 DNS Challenge",
    authors: "Tianrui Wang, W Zhu, Y Gao, Y Chen, J Feng, S Zhang",
    venue_en: "ICASSP 2022 - IEEE International Conference on Acoustics, Speech and Signal Processing (DNS Challenge, 5th place)",
    venue_zh: "ICASSP 2022 国际声学语音与信号处理会议（DNS Challenge 第 5 名）",
    type: "conference",
    first: true,
    highlight: "DNS Challenge 5th",
    doi: "10.1109/ICASSP43922.2022.9747647",
    arxiv: "2202.12643",
    code_url: "https://github.com/wangtianrui/HGCN",
    abstract: "Building on HGCN, we extend to full-band signal processing, harmonic integral spectrum refinement, and improved coarse + compensation modules, yielding HGCN+. Without resampling, HGCN+ handles both wide-band and full-band signals and outperforms baselines on public test sets, earning 5th place in the ICASSP 2022 DNS Challenge."
  },
  {
    year: 2022,
    title: "Multiple Confidence Gates for Joint Training of SE and ASR",
    authors: "Tianrui Wang, W Zhu, Y Gao, J Feng, D Zhu, S Zhu, S Zhang",
    venue_en: "NCMMSC 2022 - National Conference on Man-Machine Speech Communication, 141-148",
    venue_zh: "全国人机语音通讯学术会议 NCMMSC 2022, 141-148",
    type: "conference",
    first: true,
    arxiv: "2204.00226"
  },
  {
    year: 2022,
    title: "A CTC Triggered Siamese Network with Spatial-Temporal Dropout for Speech Recognition",
    authors: "Y Gao, J Feng, T Wang, C Deng, S Zhang",
    venue_en: "arXiv preprint arXiv:2206.08031",
    venue_zh: "arXiv 预印本 arXiv:2206.08031",
    type: "preprint",
    first: false,
    arxiv: "2206.08031",
    abstract: "Siamese networks have shown effective results in unsupervised visual representation learning. We adapt this idea to ASR by proposing a CTC-triggered Siamese network with spatial-temporal dropout, improving ASR robustness."
  },

  /* ====================== 2021 ====================== */
  {
    year: 2021,
    title: "A Deep Learning Loss Function based on Auditory Power Compression for Speech Enhancement",
    authors: "Tianrui Wang, W Zhu",
    venue_en: "arXiv preprint arXiv:2108.11877",
    venue_zh: "arXiv 预印本 arXiv:2108.11877",
    type: "preprint",
    first: true,
    arxiv: "2108.11877",
    abstract: "We analyze the impact of auditory perception on speech-enhancement loss functions and propose a loss based on loudness-power compression. The resulting objective better aligns model optimization with human auditory perception and reduces perceptual distortion in enhanced speech."
  },

  /* ====================== 2019 ====================== */
  {
    year: 2019,
    title: "Environmental Sound Classification Method based on Mel-frequency Cepstral Coefficient Deep Convolution and Bagging",
    authors: "Tianrui Wang, Q Bao, P Qin",
    venue_en: "Journal of Computer Applications, 39(12), 3515",
    venue_zh: "计算机应用，39(12)，3515",
    type: "journal",
    first: true,
    code_url: "https://github.com/wangtianrui/NutritionMaster",
    abstract: "We propose an environmental-sound classification method based on MFCC + deep convolutions + Bagging ensemble. By aggregating multiple weak classifiers via Bagging, the approach improves generalization on small-scale audio datasets and achieves state-of-the-art performance in its benchmark."
  }
];

// 暴露给 main.js
window.PUBLICATIONS = PUBLICATIONS;
