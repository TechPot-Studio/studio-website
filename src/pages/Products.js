import React from 'react';
import {
    Avatar, Button, ButtonGroup,
    Col,
    Divider,
    Grid,
    Icon,
    IconButton,
    Panel,
    PanelGroup,
    Popover,
    Row,
    Tag,
    Whisper
} from 'rsuite';
import LinkBlank from '../components/LinkBlank';
import { Link } from 'react-router-dom';

class Product extends React.Component {
    generateTag(tags, languages=[]) {
        const tagsArr = [];
        languages.forEach(lang => {
            const speaker = (
                <Popover title={lang}>
                    This project is building with {lang}
                </Popover>
            );
            tagsArr.push((
                <Whisper speaker={speaker} trigger="hover" placement="topStart">
                    <Tag style={{fontWeight: '600'}}>{lang}</Tag>
                </Whisper>
            ));
        })
        tags.forEach(tag => {
            tagsArr.push((
                <Tag>{tag}</Tag>
            ));
        });
        return tagsArr;
    }

    generateAuthor(authors) {
        function getShorthand(name) {
            const bigCaseLetters = name.match(/[A-Z]/g)
            if (bigCaseLetters.length === 1) {
                return name.slice(0, 2);
            } else {
                return bigCaseLetters[0] + bigCaseLetters[1]
            }
        }
        const authorsArr = [];
        authors.forEach((author) => {
            const speaker = (
                <Popover title={author}>
                    Internal Contributor
                </Popover>
            )
            authorsArr.push((
                <Whisper speaker={speaker} trigger="hover" placement="topStart">
                    <Avatar
                        size="sm"
                        alt={getShorthand(author)}
                        src={`${process.env.PUBLIC_URL}/avatar/${author}.jpg`}
                        style={{ verticalAlign: 'middle'}}
                    />
                </Whisper>
            ));
            authorsArr.push('\n');
        });
        if (this.props.repo && this.props.user) {
            const speaker = (
                <Popover title="Other contributors">
                    This project is an <strong>OpenSource</strong> project. <br />
                    Anyone on GitHub can be a contributor.
                </Popover>
            )
            authorsArr.push(
                <Whisper speaker={speaker} trigger="hover" placement="topStart">
                    <Avatar size="sm" style={{ verticalAlign: 'middle' }}>
                        <Icon icon="github" />
                    </Avatar>
                </Whisper>
            )
        }
        return authorsArr;
    }

    generateHeader(text, user, repo) {
        let GHButton = (<span />);
        if (user && repo) {
            GHButton = (
                <LinkBlank to={`//github.com/${user}/${repo}`}>
                    <IconButton icon={<Icon icon="github" />} circle style={{float: 'right', marginLeft: 5}} />
                </LinkBlank>
            );
        }

        const DetailButton = (
            <Link to={`/product/${text.toLowerCase().replace(/[^a-z0-9]/g,'-')}`}>
                <IconButton
                    icon={<img src={`${process.env.PUBLIC_URL}/images/link-45deg.svg`} alt="details" />}
                    circle
                    style={{float: 'right'}}
                />
            </Link>
        )

        return [
            text,
            GHButton,
            DetailButton
        ]
    }

    render() {
        return (
            <Panel header={this.generateHeader(this.props.header, this.props.user, this.props.repo)} bordered shaded>
                {this.props.children}
                <Divider />
                Tags: {this.generateTag(this.props.tags, this.props.lang)}
                <br />
                <br />
                <div className="avatar-group">
                    {this.generateAuthor(this.props.author)}
                </div>
            </Panel>
        )
    }
}

export default class ProductsPage extends React.Component {
    render() {
        return [
            <PanelGroup accordion>
                <Panel header="Opensource Projects" defaultExpanded>
                    <Grid fluid>
                        <Row gutter={8}>
                            <Col xs={8}>
                                <Product header="Pecis"
                                         lang={['typescript']}
                                         tags={['web', 'frontend']}
                                         author={['TheColdPot']}
                                         user={'TechPot-Studio'}
                                         repo={'Pecis'}
                                >
                                    A JavaScript library to make web development easier. Full TypeScript supported.
                                    IE 11 Compilable. Required DOM variables.
                                </Product>
                            </Col>
                            <Col xs={8}>
                                <Product header="DataPack Planet"
                                         lang={['javascript']}
                                         tags={['electron', 'desktop', 'Minecraft']}
                                         author={['TheColdPot']}
                                         user={'TechPot-Studio'}
                                         repo={'datapack-planet'}
                                >
                                    A data-pack editor for Minecraft. Built-in text editor for commands
                                    and user-friendly visual editor for JSON schemes
                                </Product>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
                <Panel header="Minecraft Maps" defaultExpanded>
                    <Row gutter={8}>
                        <Col xs={8}>
                            <Product
                                header="TechPot BedWars v3"
                                tags={['1.16.5', 'pvp']}
                                author={['TheColdPot', 'BlockStars', 'Jack']}
                            >
                                You will no longer to respawn since your bed is destroyed.
                                Can you survive from a fierce battle in the sky island?
                                Good luck.
                            </Product>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Minecraft Server Plugins" defaultExpanded>

                    <Row gutter={8}>
                        <Col xs={8}>
                            <Product
                                header="BedWars"
                                lang={['spigot']}
                                tags={['1.16.5', 'making']}
                                author={['TheColdPot']}
                            >
                                You will no longer to respawn since your bed is destroyed.
                                Can you survive from a fierce battle in the sky island?
                                Good luck.
                            </Product>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Minecraft Resource Packs" defaultExpanded>
                </Panel>
            </PanelGroup>
        ]
    }
}
