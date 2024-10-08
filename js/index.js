import {
	C as e,
	o as t,
	c as a,
	a as s,
	_ as o,
	f as n,
	r as i,
	b as l,
	w as r,
	d as c,
	e as d,
	F as m,
	p,
	g as u,
	h as g,
	i as h,
	j as f,
	k as b
} from "./vendor.cbb3e703.js";
! function() {
	const e = document.createElement("link").relList;
	if (!(e && e.supports && e.supports("modulepreload"))) {
		for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
		new MutationObserver((e => {
			for (const a of e)
				if ("childList" === a.type)
					for (const e of a.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
		})).observe(document, {
			childList: !0,
			subtree: !0
		})
	}

	function t(e) {
		if (e.ep) return;
		e.ep = !0;
		const t = function(e) {
			const t = {};
			return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e
					.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" :
				"anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
		}(e);
		fetch(e.href, t)
	}
}();
var I = (e, t) => {
	for (const [a, s] of t) e[a] = s;
	return e
};
const v = {
		class: "cropper"
	},
	y = ["src"];
async function w(e) {
	return new Promise((t => {
		const a = new FileReader;
		a.readAsDataURL(e), a.onload = () => {
			t(a.result)
		}
	}))
}
const C = {
		name: "index",
		components: {
			Cropper: I({
				name: "cropper",
				props: {
					stamp: Number,
					originImg: String
				},
				data: () => ({
					cropper: null
				}),
				emits: ["getImg"],
				watch: {
					"$props.stamp"() {
						this.cropper.getCroppedCanvas().toBlob((async e => {
							this.$emit("getImg", e)
						}))
					}
				},
				methods: {
					init() {
						this.cropper = new e(this.$refs.img, {
							aspectRatio: 1,
							autoCropArea: 1,
							viewMode: 1,
							movable: !1,
							zoomable: !1
						})
					}
				}
			}, [
				["render", function(e, o, n, i, l, r) {
					return t(), a("div", v, [s("img", {
						src: n.originImg,
						onLoad: o[0] || (o[0] = (...e) => r.init && r.init(...e)),
						ref: "img",
						alt: ""
					}, null, 40, y)])
				}],
				["__scopeId", "data-v-1658a208"]
			])
		},
		data: () => ({
			canvas: null,
			stamp: 0,
			size: 500,
			showPicker: !1,
			originImg: null,
			gotImg: null,
			processedImg: "./image/icon.png",
			processedBlob: null,
			canSave: !1,
			hqSize: 150,
			jbSize: 600,
			jbPos: 0,
			jbOffset: 4,
			CNImg: null
		}),
		created() {
			const e = new Image(369, 303);
			e.src = "./image/CN.png", this.CNImg = e
		},
		mounted() {
			this.canvas = this.$refs.canvas
		},
		methods: {
			async inputImg() {
				const e = this.$refs.input.files[0];
				e && (this.originImg = await w(e), this.showPicker = !0), this.$refs.input.value = ""
			},
			async getImg(e) {
				this.showPicker = !1;
				const t = new Image(500, 500);
				t.src = await w(e), t.onload = () => {
					this.gotImg = t, this.generate(), this.canSave = !0
				}
			},
			generate: o.throttle((function() {
				var e, t;
				const a = this.gotImg,
					s = this.canvas.getContext("2d"),
					{
						hqSize: o,
						jbSize: n,
						jbPos: i,
						jbOffset: l
					} = this;
				s.clearRect(0, 0, 500, 500), s.drawImage(a, 0, 0, 500, 500);
				const r = s.createRadialGradient(0, i, 0, 0, i + 100, 1.414 * n / 1.5);
				r.addColorStop(0, "#d80203"), r.addColorStop(l / 10, "rgba(216,2,3,0.8)"), r.addColorStop(1,
					"rgba(255, 255, 255, 0)"), s.fillStyle = r, s.fillRect(0, 0, 500, 500), s.drawImage(
					this.CNImg, 0, 0, this.CNImg.width, this.CNImg.height, 20, 20, 1.2178217821782178 *
					o, o), this.processedImg = null == (e = this.canvas) ? void 0 : e.toDataURL(
					"image/png", 1), null == (t = this.canvas) || t.toBlob((e => {
					this.processedBlob = e
				}), "image/png", 1)
			}), 100),
			save() {
				this.processedBlob && n.saveAs(this.processedBlob, "avatar.png")
			}
		}
	},
	k = e => (p("data-v-c909140c"), e = e(), u(), e),
	S = {
		class: "index flex"
	},
	j = ["src"],
	z = k((() => s("b", null, "五星大小:", -1))),
	x = k((() => s("b", null, "渐变大小:", -1))),
	V = k((() => s("b", null, "渐变位置:", -1))),
	P = k((() => s("b", null, "渐变区间:", -1))),
	N = {
		class: "operate flex"
	},
	_ = g("选择图片"),
	A = g("下载"),
	B = k((() => s("svg", {
		class: "icon",
		viewBox: "0 0 1024 1024",
		xmlns: "http://www.w3.org/2000/svg"
	}, [s("path", {
		d: "M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
	})], -1))),
	L = g("Github"),
	R = ["width", "height"],
	$ = g("确定");
var q = I(C, [
	["render", function(e, o, n, p, u, g) {
		const h = i("el-slider"),
			f = i("el-button"),
			b = i("el-link"),
			I = i("cropper"),
			v = i("el-dialog");
		return t(), a(m, null, [s("div", S, [s("img", {
			src: u.processedImg
		}, null, 8, j), s("label", null, [z, l(h, {
			disabled: !u.gotImg,
			modelValue: u.hqSize,
			"onUpdate:modelValue": o[0] || (o[0] = e => u.hqSize = e),
			max: u.size / 2,
			min: 50,
			onInput: o[1] || (o[1] = e => g.generate())
		}, null, 8, ["disabled", "modelValue", "max"])]), s("label", null, [x, l(h, {
			disabled: !u.gotImg,
			modelValue: u.jbSize,
			"onUpdate:modelValue": o[2] || (o[2] = e => u.jbSize = e),
			max: 1.5 * u.size,
			min: .5 * u.size,
			onInput: o[3] || (o[3] = e => g.generate())
		}, null, 8, ["disabled", "modelValue", "max", "min"])]), s("label", null, [V, l(
			h, {
				disabled: !u.gotImg,
				modelValue: u.jbPos,
				"onUpdate:modelValue": o[4] || (o[4] = e => u.jbPos = e),
				max: 100,
				min: -200,
				onInput: o[5] || (o[5] = e => g.generate())
			}, null, 8, ["disabled", "modelValue"])]), s("label", null, [P, l(h, {
			disabled: !u.gotImg,
			modelValue: u.jbOffset,
			"onUpdate:modelValue": o[6] || (o[6] = e => u.jbOffset = e),
			max: 8,
			min: 2,
			onInput: o[7] || (o[7] = e => g.generate())
		}, null, 8, ["disabled", "modelValue"])]), s("div", N, [l(f, {
			class: "choose",
			type: "primary",
			onClick: o[8] || (o[8] = t => e.$refs.input.click())
		}, {
			default: r((() => [_])),
			_: 1
		}), u.canSave ? (t(), c(f, {
			key: 0,
			class: "save",
			type: "primary",
			onClick: g.save
		}, {
			default: r((() => [A])),
			_: 1
		}, 8, ["onClick"])) : d("", !0)]), l(b, {
			class: "github",
			href: "https://github.com/yunyuyuan/gq-avatar",
			target: "_blank",
			type: "primary"
		}, {
			default: r((() => [B, L])),
			_: 1
		})]), s("input", {
			ref: "input",
			style: {
				display: "none"
			},
			type: "file",
			accept: "image/*",
			onInput: o[9] || (o[9] = (...e) => g.inputImg && g.inputImg(...e))
		}, null, 544), s("canvas", {
			width: u.size,
			height: u.size,
			ref: "canvas",
			style: {
				display: "none"
			}
		}, null, 8, R), u.showPicker ? (t(), c(v, {
			key: 0,
			"append-to-body": !0,
			class: "dialog",
			"model-value": !0,
			title: "裁剪图片",
			"close-on-click-modal": !1
		}, {
			footer: r((() => [l(f, {
				onClick: o[10] || (o[10] = e => u.stamp = Date
				.now()),
				type: "primary"
			}, {
				default: r((() => [$])),
				_: 1
			})])),
			default: r((() => [l(I, {
				show: u.showPicker,
				stamp: u.stamp,
				originImg: u.originImg,
				onGetImg: g.getImg
			}, null, 8, ["show", "stamp", "originImg", "onGetImg"])])),
			_: 1
		})) : d("", !0)], 64)
	}],
	["__scopeId", "data-v-c909140c"]
]);
f(h({
	setup: e => (e, a) => (t(), c(q))
})).use(b).mount("#app");