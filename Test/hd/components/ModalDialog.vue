<template lang="jade">
    div
        div.modal-layer.fixed(@click.stop.prevent="closeModal")
        div.modal.fixed.visible.modal-out.hidden
            div.modal-inner
                div.modal-title(v-if="!hideTitle") {{ title }}
                div.modal-text(v-html="text", v-if="!hideText")
            div.modal-buttons.rel(:class="{one: buttons == 1}")
                span.modal-button(
                    v-if="showCancelBtn",
                    @click.stop.prevent="closeModal"
                ) {{ cancelText }}
                span.modal-button.modal-button-bold(
                    v-if="showConfirmBtn",
                    @click.stop.prevent="confirmHandle"
                ) {{ confirmText }}
</template>
<script>
	export default {
		data() {
			return {
				title: '小提示',
				text: '',
				cancelText: '取消',
				confirmText: '确定',
				hideTitle: false,
				hideText: false,
				buttons: 2,
				showCancelBtn: false,
				showConfirmBtn: true
			};
		},
		methods: {
			resetModalOptions(options) {
				if (options.title) this.title = options.title;
				if (options.text) this.text = options.text;
				if (options.cancelText) this.cancelText = options.cancelText;
				if (options.confirmText) this.confirmText = options.confirmText;
				if (!options.cancelText || !options.confirmText) this.buttons = 1;
				if (!options.cancelText && !options.confirmText) this.buttons = 2;
				if (!options.cancelText && options.confirmText) this.showCancelBtn = false;
				if (options.cancelText && !options.confirmText) this.showConfirmBtn = false;
				if (options.hideTitle) this.hideTitle = options.hideTitle;
				if (options.hideText) this.hideText = options.hideText;
			},
			showModal(options) {
				let $ele = this.$el,
					$layer = $ele.children[0],
					$modal = $ele.children[1];
				this.resetModalOptions(options);
				$layer.addClassName('modal-layer-visible');
				$modal.removeClassName('modal-out').removeClassName('hidden').addClassName('visible modal-in');
			},
			closeModal() {
				let $ele = this.$el,
					$layer = $ele.children[0],
					$modal = $ele.children[1];
				$layer.removeClassName('modal-layer-visible');
				$modal.removeClassName('modal-in').addClassName('modal-out');
				setTimeout(function() {
					$modal.addClassName('hidden');
				}, 430);
			},
            confirmHandle() {
                this.closeModal();
                this.$emit('confirmCallback');
            }
		}
	}

</script>

<style lang="sass" scoped>
	.modal {
		width: 270px;
		position: fixed;
		z-index: 12300;
		left: 50%;
		margin-left: -135px;
		margin-top: -120px;
		top: -50%;
		text-align: center;
		border-radius: 7px;
		opacity: 0;
		-webkit-transform: translate3d(0, 0, 0) scale(1.185);
		-ms-transform: translate3d(0, 0, 0) scale(1.185);
		transform: translate3d(0, 0, 0) scale(1.185);
		-webkit-transition-property: -webkit-transform, opacity;
		-moz-transition-property: -moz-transform, opacity;
		-ms-transition-property: -ms-transform, opacity;
		-o-transition-property: -o-transform, opacity;
		transition-property: transform, opacity;
		color: #000;
		&-layer {
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .6);
			z-index: 9000;
			visibility: hidden;
			opacity: 0;
			transition-duration: .4s;
			&-visible {
				visibility: visible;
				opacity: 1;
			}
		}
		&.modal-in {
			opacity: 1;
			-webkit-transition-duration: .4s;
			transition-duration: .4s;
			-webkit-transform: translate3d(0, 0, 0) scale(1);
			-ms-transform: translate3d(0, 0, 0) scale(1);
			transform: translate3d(0, 0, 0) scale(1);
		}
		&.modal-out {
			opacity: 0;
			-webkit-transition-duration: .4s;
			transition-duration: .4s;
			-webkit-transform: translate3d(0, 0, 0) scale(.815);
			-ms-transform: translate3d(0, 0, 0) scale(.815);
			transform: translate3d(0, 0, 0) scale(.815);
		}
		&.visible {
			top: 50%;
		}
		&.hidden {
			top: -50%;
		}
		&-inner {
			padding: 15px;
			border-bottom: 1px solid #eee;
			border-radius: 7px 7px 0 0;
			background: #fff;
		}
		&-title {
			font-size: 18px;
			text-align: center;
			& p {
				margin: 0;
			}
		}
		&-text {
			margin-top: 5px;
			font-size:14px;
			color:#c2c2c2;

		}
		&-button {
			width: 100%;
			padding: 0 5px;
			height: 44px;
			font-size: 16px;
			line-height: 44px;
			text-align: center;
			color: #737272;
			background: #fff;
			display: block;
			position: relative;
			overflow: hidden;
			cursor: pointer;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			-ms-box-sizing: border-box;
			box-sizing: border-box;
			border-right: 1px solid #eee;
			-webkit-box-flex: 1;
			-ms-flex: 1;
			&:first-child {
				border-radius: 0 0 0 7px;
			}
			&:last-child {
				border-right: none;
				border-radius: 0 0 7px 7px;
			}
			&-bold {
				font-weight: 500;
				color: #4fd04d;
			}
			&s {
				height: 44px;
				overflow: hidden;
				display: -webkit-box;
				display: -ms-flexbox;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				-webkit-justify-content: center;
				justify-content: center;
				&.one .modal-button {
					border-radius: 0 0 7px 7px;
					color: #007aff;
				}
			}
		}
	}

</style>
