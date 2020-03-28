import Taro from '@tarojs/taro';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import './index.scss';
function BannerSwiper() {
    return (
        <Swiper
            className='swiper-box'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
                <View className='swiper-item'>
                    <Image src="http://zhushang-c.oss-cn-hangzhou.aliyuncs.com/lqq/banner1.jpg" />
                </View>
            </SwiperItem>
            <SwiperItem>
                <View className='swiper-item'>
                    <Image src="http://zhushang-c.oss-cn-hangzhou.aliyuncs.com/lqq/banner2.jpg" />
                </View>
            </SwiperItem>
            <SwiperItem>
                <View className='swiper-item'>
                    <Image src="http://zhushang-c.oss-cn-hangzhou.aliyuncs.com/lqq/banner3.png" />
                </View>
            </SwiperItem>
        </Swiper>
    )
}
export default BannerSwiper